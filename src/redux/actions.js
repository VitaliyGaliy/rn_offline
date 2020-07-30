import axios from 'axios';
const api = axios.create({
  url: 'http://api2.petchecktechnology.com/',
});

export const sendTimestamp = (url) => {
  function thunk(dispatch) {
    // api
    //   .post('/walk/start_walk?jwt=jwtTokenHere', {
    //     walk_id: 91876772,
    //     walker_id: 43307,
    //     ts: '2019-12-22 19:48:00',
    //   })
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     dispatch({ type: FETCH_USER_SUCCESS, payload: responseJson });
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    console.log('sendTimestamp');
    dispatch({ type: 'SEND_START_TIME' });
  }
  // Add these
  thunk.meta = {
    retry: true,
    name: 'sendTimestamp', // This should be the name of your function
    args: [url], // These are the arguments for the function. Add more as needed.
  };
  thunk.interceptInOffline = true; // This is the important part
  return thunk; // Return it afterwards
};
