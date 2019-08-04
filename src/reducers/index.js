import { combineReducers } from 'redux';
import login from './login';
import error from './error';
import socket from './socket';

export default combineReducers({ login, socket, error });
