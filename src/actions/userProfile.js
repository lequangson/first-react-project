import { UPDATE_WELCOMEPAGE_COMPLETION_SUCCESS } from '../constants/userProfile'
import axios from 'axios'

export function updateWelcomePageCompletion(welcome_page_completion) {
  return {
    type: UPDATE_WELCOMEPAGE_COMPLETION_SUCCESS,
    extentions: welcome_page_completion
  }
}
export function getWelcomePageCompletion() {

  // get api key
  const request = axios({
    method: 'GET',
    url: 'http://localhost:3004/demo_content',
  })

  return {
    type: UPDATE_WELCOMEPAGE_COMPLETION_SUCCESS,
    payload: request,
  }
}
