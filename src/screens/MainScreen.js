import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { sendTimestamp } from '../redux/actions';

export const MainScreen = () => {
  const { startTimeIsSended } = useSelector((state) => state.appReducer);
  const { isConnected } = useSelector((state) => state.network);
  console.log('isConnected', isConnected);

  const dispatch = useDispatch();
  const handleSendTimeStamp = () => {
    dispatch(sendTimestamp());
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`Internet connection: ${isConnected}`}</Text>
      <Text
        style={styles.text}
      >{`Start time has sended: ${startTimeIsSended}`}</Text>
      <Button onPress={handleSendTimeStamp} title='Sent start time' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginBottom: 20,
  },
});
