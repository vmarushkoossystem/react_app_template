import constantsRequest from '../constants/request';
import {
  makeRequest as servicesMakeRequest
} from '../services/request';

export const makeRequest = id => {
  const setLastId = id => {
    return {
      type: constantsRequest.SET_LAST_ID,
      payload: id
    };
  };

  const startFetching = () => {
    return {
      type: constantsRequest.TEST_REQUEST_START_FETCHING
    };
  };

  const stopFetching = payload => {
    return {
      type: constantsRequest.TEST_REQUEST_STOP_FETCHING,
      payload
    };
  };

  const errorFetching = payload => {
    return {
      type: constantsRequest.TEST_REQUEST_ERROR_FETCHING,
      payload
    };
  };

  return async dispatch => {
    let data = null;
    id++;

    dispatch(startFetching());

    try {
      data = await servicesMakeRequest(id);
    } catch (ex) {
      console.error('Exception:', ex);
      dispatch(errorFetching(ex.message || ex));
      return;
    }

    dispatch(setLastId(id));
    dispatch(stopFetching(data));
  };
};
