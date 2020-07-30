import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { MainScreen } from './src/screens/MainScreen';
import { ReduxNetworkProvider } from 'react-native-offline';
import { Provider } from 'react-redux';
import createReduxStore from './src/redux/createStore';

const store = createReduxStore();

export default App = () => (
  <Provider store={store}>
    <ReduxNetworkProvider>
      <MainScreen />
    </ReduxNetworkProvider>
  </Provider>
);
