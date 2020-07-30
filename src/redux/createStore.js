import { createStore, combineReducers, applyMiddleware } from 'redux';

import {
  reducer as network,
  createNetworkMiddleware,
} from 'react-native-offline';

import appReducer from './reducer';
import thunk from 'redux-thunk';

const reducers = {
  appReducer,
  network,
};

export default function createReduxStore({ queueReleaseThrottle = 1000 } = {}) {
  const networkMiddleware = createNetworkMiddleware({
    // regexActionType: /^OTHER/,
    // actionTypes: ['ADD_ONE', 'SUB_ONE'],
    queueReleaseThrottle: 200,
  });

  const rootReducer = combineReducers(reducers);

  const middlewares = [networkMiddleware];

  middlewares.push(thunk);

  const store = createStore(rootReducer, applyMiddleware(...middlewares));

  return store;
}
