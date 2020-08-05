import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import ExpoFileSystemStorage from 'redux-persist-expo-filesystem';
import {
  reducer as network,
  createNetworkMiddleware,
  offlineActionCreators,
  checkInternetConnection,
} from 'react-native-offline';

import appReducer from './reducer';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage: ExpoFileSystemStorage,
};

const reducers = {
  appReducer,
  network,
};

export default function createReduxStore(callback) {
  const networkMiddleware = createNetworkMiddleware({
    // regexActionType: /^OTHER/,
    // actionTypes: ['ADD_ONE', 'SUB_ONE'],
    queueReleaseThrottle: 200,
  });

  const rootReducer = combineReducers(reducers);

  const middlewares = [networkMiddleware];

  middlewares.push(thunk);

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(persistedReducer, applyMiddleware(...middlewares));

  const { connectionChange } = offlineActionCreators;
  // https://github.com/rt2zz/redux-persist#persiststorestore-config-callback
  persistStore(store, null, () => {
    console.log('persistStore(store, null,');
    // After rehydration completes, we detect initial connection
    checkInternetConnection().then((isConnected) => {
      store.dispatch(connectionChange(isConnected));

      callback(); // Notify our root component we are good to go, so that we can render our app
    });
  });

  return store;
}
