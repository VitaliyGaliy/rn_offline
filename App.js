import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { MainScreen } from './src/screens/MainScreen';
import { ReduxNetworkProvider } from 'react-native-offline';
import { Provider } from 'react-redux';
import createReduxStore from './src/redux/createStore';

// const store = createReduxStore();

// export default App = () => {
//   const [appState, setAppState] = useState({ isLoading: false, store: null });
//   useEffect(() => {
//     setIsLoading({
//       isLoading: true,
//       store: createReduxStore(() => setAppState({ isLoading: false })),
//     });
//   }, []);
//   if (appState.isLoading) return null;
//   return (
//     <Provider store={store}>
//       <ReduxNetworkProvider>
//         <MainScreen />
//       </ReduxNetworkProvider>
//     </Provider>
//   );
// };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      store: createReduxStore(() => this.setState({ isLoading: false })),
    };
  }

  render() {
    if (this.state.isLoading) return null;

    return (
      <Provider store={this.state.store}>
        <ReduxNetworkProvider pingInBackground={true}>
          <MainScreen />
        </ReduxNetworkProvider>
      </Provider>
    );
  }
}

export default App;
