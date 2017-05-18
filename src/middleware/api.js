import $ from 'jquery'
import { browserHistory } from 'react-router'
import {
  BASE_API_AUTHEN_URL, AUTH_NEW_USER_REGISTRATION, AUTH_USER_LOGIN, AUTH_DEACTIVATED,
  AUTH_DISCONNECTION_ERROR_CODE, ACCESS_DENIED_ERROR_CODE,
} from '../constants/auth'
import { BASE_API_URL } from '../constants/search'
import { ACCESS_DENIED_ERROR_MSG, API_EXECUTION_ERROR_NETWORK_MSG } from '../constants/TextDefinition'
import * as ymmStorage from '../utils/ymmStorage';

function getConfig(method, params, authenticated, token, isAnonymous) {
  // let config = {
  //     method: method,
  //     headers: { 'Authorization': `Bearer ${isAnonymous ? process.env.ANONYMOUS_TOKEN : token}` }
  // }
  let config = {
      method: method,
      headers: {
        'Authorization': `Bearer ${isAnonymous ? process.env.ANONYMOUS_TOKEN : token}`,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' ,
        'X-Frame-Options': 'SAMEORIGIN',
        'X-XSS-Protection': '1',
        'X-Content-Type-Options': 'nosniff'
      }
  }

  if (method.toUpperCase() === 'POST'){
    const form_data = new FormData();
    for ( var key in params ) {
      if(Array.isArray(params[key])) {
        // ex params: {'personal[user_hobbies][][value]': ['football', 'game', ...]}
        for(var key2 in params[key]) {//in case multiple value with same key
          form_data.append(key, params[key][key2]);
        }
      }else {
        // ex params: {'name' : 'Tran A', 'age' : 30, ...}
        form_data.append(key, params[key]);
      }
    }
    config.body = form_data
  }
  return config
}

function callApi(method, endpoint, params, authenticated, isAnonymous = false, googleAuth = false) {
  let config = {}
  let data = ''
  let token = ''
  let url = ''
  let isLogin = false
  if(authenticated) {//case user logged in, call api with authentication
    token = ymmStorage.getItem('ymm_token')
    if(!token) {//redirect to login page if does not exist ymm_token
      ymmStorage.setItem('previous_url', window.location.pathname)
      browserHistory.push('/')
      location.reload()
      return
    }
    config = getConfig(method, params, authenticated, token, isAnonymous)
    if (method.toUpperCase() !== 'POST'){
      //CASE GET, DELETE METHOD
      data = Object.keys(params).map(function(k) {
        return k + '=' + params[k]
      }).join('&')//convert json data to url parameter
    }
    //@TODO need to handle other method
    url = BASE_API_URL + endpoint + (data ? '?' + data : '')
  } else { // case login

    const api_key = ymmStorage.getItem('api_key') || null
    config = getConfig(method, params, authenticated, api_key, isAnonymous)
    let paramsUrl = ''
    if (!isAnonymous) {
      isLogin = true
      const adsrc = ymmStorage.getItem('adsrc') || null
      if (googleAuth) {
        const google_token = ymmStorage.getItem('google_token') || null
        paramsUrl = '?google_auth=true&google_user_token=' + google_token + '&advertisement_source=' + adsrc
      } else {
        const fb_token = ymmStorage.getItem('fb_token') || null
        paramsUrl = '?fb_user_token=' + fb_token + '&advertisement_source=' + adsrc
      }
    }
    url = isAnonymous ? (BASE_API_URL + endpoint) : (BASE_API_AUTHEN_URL + endpoint + paramsUrl)
  }

  //use fetch api to call API
  try{
    return fetch(url, config)
      .then(response =>
        response.json()
        .then(output => ({ output, response }))
      ).then(({ output, response }) => {
        if (response.status === 401 && !isLogin) { //Unauthorized with invalid token
          ymmStorage.clear();
          browserHistory.push('/')
          location.reload()
          return;
        }
        if (!response.ok) {
          return Promise.reject(output)
        }
        var token = response.headers.get('Token')
        if(token) {
          output.token = token
        }

        if (output.execution_code && output.execution_code != AUTH_NEW_USER_REGISTRATION && output.execution_code != AUTH_USER_LOGIN) {
          return Promise.reject(output);
        }
        //when call API, successfull with execution_code = 1
        if (output.execution_result && output.execution_result.execution_code != 1) {
          return Promise.reject(output);
        }
        return output
      }).catch(function(err) {
        //incase authentication, response does not contain execution_result
        if(typeof err.execution_code == 'undefined' && typeof err.execution_result.execution_code == 'undefined') {
          err.execution_code = ACCESS_DENIED_ERROR_CODE,
          err.message = ACCESS_DENIED_ERROR_MSG
        }
        if(typeof err.execution_result != 'undefined') {
          if(err.execution_result.execution_code == "10" || err.execution_result.execution_code == "04") {
            //token unknow error
            ymmStorage.clear();
            browserHistory.push('/')
            location.reload()
            return
          }
        }
        return Promise.reject(err)
      })
  } catch(e) {
    alert('error' + e)
  }
}

export const CALL_API = Symbol('Call API')

export default store => next => action => {
  const callAPI = action[CALL_API]
  // So the middleware doesn't get applied to every single action
  if (typeof callAPI === 'undefined') {
    return next(action)
  }
  let { method, endpoint, params, types, authenticated, extentions, isAnonymous, googleAuth } = callAPI
  const [requestType, successType, errorType] = types
  // Passing the authenticated boolean back in our data will let us distinguish between normal and secret quotes
  return callApi(method, endpoint, params, authenticated, isAnonymous, googleAuth).then(
    response =>
      next({
        response,
        authenticated,
        type: successType,
        extentions: extentions,
      }),
    error => {
      if(typeof error.execution_result !== 'undefined' && error.execution_result.message == AUTH_DEACTIVATED){ //user deactivated
        browserHistory.push('/logout')
        location.reload()
        return
      }
      return Promise.reject(
        next({
          response: error,
          error: true,
          error_code: error.execution_code ? error.execution_code : error.execution_result.execution_code,
          error_message: error.message ? error.message : error.execution_result.message,
          type: errorType,
          extentions: extentions
        })
      )
  }
  ).catch((err) => { //this case occur when disconnect network
    if (typeof err.error == 'undefined') { //this case for disconnect internet connection
      return Promise.reject(
        next({
          response: err,
          error: true,
          error_code: AUTH_DISCONNECTION_ERROR_CODE, //web server is down (not sure)
          error_message: API_EXECUTION_ERROR_NETWORK_MSG,
          type: errorType,
          extentions: extentions,
        })
      )
    }
    return Promise.reject(err)
  })
}
