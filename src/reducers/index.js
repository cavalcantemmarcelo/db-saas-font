import { combineReducers } from 'redux';
import websocketReducer from './websocketReducer';

const rootReducer = combineReducers({
  websocket: websocketReducer,
});

export default rootReducer;
