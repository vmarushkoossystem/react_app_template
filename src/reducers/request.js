import constantsRequest from '../constants/request';

const initialState = {
  lastId: 0,
  data: 'No content',
  isFetching: false,
  error: null
};

export default (state = initialState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  const {type, payload} = action;

  switch (type) {
    case constantsRequest.SET_LAST_ID:
      return {
        ...newState,
        lastId: payload
      };
    case constantsRequest.TEST_REQUEST_START_FETCHING:
      return {
        ...newState,
        isFetching: true
      };
    case constantsRequest.TEST_REQUEST_STOP_FETCHING:
      return {
        ...newState,
        data: payload,
        isFetching: false
      };
    case constantsRequest.TEST_REQUEST_ERROR_FETCHING:
      return {
        ...newState,
        isFetching: false,
        error: payload
      };
    default:
      return newState;
  }
};
