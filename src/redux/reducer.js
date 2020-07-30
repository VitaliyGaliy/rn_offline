const initialState = {
  startTimeIsSended: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SEND_START_TIME': {
      return Object.assign({}, state, {
        startTimeIsSended: true,
      });
    }

    default:
      return state;
  }
}
