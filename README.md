App has react-native-offline module - for managign its state in offline mode and queue api calls. 
Offline queue support to automatically re-dispatch actions when connection is back online.

Structure of the project:
1. Main component App.js wrapped into ReduxNetworkProvider, to inject connection state into components tree.
2. MainScreen.js gets redux state (isConnected, startTimeIsSended) and action - sendTimestamp.
3. When a user click the 'Sent start time' button the action sendTimestamp is intercepted by react-native-offline module and if the app in offline it queue this action and re-dispatch actions when connection is back online.


To test offline mode just turn off wi-fi on your mobile device.

As for background minitoring internet connection and sending request there are some restrictions in ios. For background fetch and background task ios device has period of time from 15 to couple of hours for making only 1 request. So I gues if user needs to send request as queckly as posible it is not the right way.
