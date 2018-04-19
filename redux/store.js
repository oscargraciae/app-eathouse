import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { autoRehydrate } from 'redux-persist';

import { createLogger } from 'redux-logger';
import reduxReset from 'redux-reset';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducer';

const middlewares = [
  promiseMiddleware(),
  thunk,
];

// if (__DEV__) { // eslint-disable-line
//   middlewares.push(createLogger());
// }

export default createStore(
  reducers,
  undefined,
  composeWithDevTools(applyMiddleware(...middlewares), autoRehydrate(), reduxReset()),
);
