import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import globalConstants from './constants/global';
import history from './helpers/history';

const {ENVIRONMENT} = globalConstants;
const initialState = {};
const middleware = [
  thunk,
  routerMiddleware(history)
];

const composeEnhancers = ((process.env.NODE_ENV === ENVIRONMENT.DEVELOPMENT) && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default createStore(
  rootReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
);
