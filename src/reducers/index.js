import { combineReducers } from 'redux';
import login from './login';
import alerts from './alerts';
import socket from './socket';

export default combineReducers({ login, socket, alerts });
