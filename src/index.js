/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute} from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promise from 'redux-promise';
import PageNotFound from './pages/404';
import WelcomePage from './pages/Welcome'
// import createLoger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import App from './App';
// const loggerMiddleware = createLoger();
const middlewares = [
  promise,
  thunkMiddleware,
  // process.env.NODE_ENV !== 'production' && loggerMiddleware,
].filter(Boolean);

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(...middlewares)),
);
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={WelcomePage} />
      	<Route path="/WelcomePage" component={WelcomePage} />
      	<Route path="*" component={PageNotFound} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
