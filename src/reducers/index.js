import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../helpers/history';
import counter from './counter';

export default combineReducers({
  router: connectRouter(history),
  counter
});
