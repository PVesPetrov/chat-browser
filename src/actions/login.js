import * as c from 'constants/login';
import * as api from 'service/login';
import history from '../history';
import { showError } from './error';

export const login = credentials => async dispatch => {
	dispatch({ type: c.LOGIN.START });
	try {
		const { data } = await api.login(credentials);
		if (!data.Error && data.token) {
			dispatch({ type: c.LOGIN.SUCCESS, data });
			history.push('/home');
		} else {
			dispatch(showError(data.Error));
			dispatch({ type: c.LOGIN.ERROR, data });
		}
	} catch (err) {
		dispatch(showError(err.response.data.msg));
		dispatch({ type: c.LOGIN.ERROR, err });
	}
};

export const signup = credentials => async dispatch => {
	dispatch({ type: c.SIGNUP.START });
	try {
		const { data } = await api.signup(credentials);
		if (!data.Error) {
			dispatch({ type: c.SIGNUP.SUCCESS, data });
			history.push('/home');
		} else {
			dispatch(showError(data.Error));
			dispatch({ type: c.SIGNUP.ERROR, data });
		}
	} catch (err) {
		dispatch(showError(err.response.data.msg));
		dispatch({ type: c.SIGNUP.ERROR, err });
	}
};

export const logout = () => ({ type: c.LOGOUT });
