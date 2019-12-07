import constantsCounter from '../constants/counter';

export default function (state = 0, action) {
  switch (action.type) {
    case constantsCounter.INCREMENT:
      return state + 1;
    case constantsCounter.DECREMENT:
      return state - 1;
    case constantsCounter.RESET:
      return 0;
    default:
      return state;
  }
};
