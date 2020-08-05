Accordingly to react-native-offline module we need redux-persist module to save state to mobile device storage. In createStore.js I configured persistStore where we
can check for an internet connection via checkInternetConnection method and pass a callback from root components (App.js) to set initial store and render the app 
conditionally. 
So if our app has no internet connection we press send button and application goes in background. After some time we open the app and it detects internet connection and 
and send persisted previous request. 
