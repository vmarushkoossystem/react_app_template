import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../helpers/history';
import counter from './counter';
import request from './request';

export default combineReducers({
  router: connectRouter(history),
  counter,
  request
});
