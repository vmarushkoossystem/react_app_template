import constantsCounter from '../constants/counter';

export const increment = () => {
  return dispatch => {
    dispatch({
      type: constantsCounter.INCREMENT
    });
  }
};

export const decrement = () => {
  return dispatch => {
    dispatch({
      type: constantsCounter.DECREMENT
    });
  }
};

export const reset = () => {
  return dispatch => {
    dispatch({
      type: constantsCounter.RESET
    });
  }
};
