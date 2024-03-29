import { combineReducers } from 'redux';
import * as c from 'constants/login';

const user = (state = {}, { type, payload }) => {
	switch (type) {
		case c.LOGIN.SUCCESS:
			return payload;
		case c.LOGOUT:
			return {};
		default:
			return state;
	}
};

const isFetching = (state = false, { type }) => {
	switch (type) {
		case c.LOGIN.START:
			return true;
		case c.LOGIN.SUCCESS:
		case c.LOGIN.ERROR:
			return false;
		default:
			return state;
	}
};

export default combineReducers({ user, isFetching });

export const getIsLoggedIn = state =>
	Object.keys(state.login.user).length && state.login.user.token;
