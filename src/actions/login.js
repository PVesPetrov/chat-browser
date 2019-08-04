import * as c from 'constants/login';
import * as api from 'service/login';
import history from '../history';
import { addError } from './error';

export const login = credentials => async dispatch => {
	dispatch({ type: c.LOGIN.START });
	try {
		const { data, error } = await api.login(credentials);
		console.log({ data, error });
		if (data) {
			dispatch({ type: c.LOGIN.SUCCESS, payload: data.data[0] });
			history.push('/home');
		} else {
			dispatch(addError(error.join()));
			dispatch({ type: c.LOGIN.ERROR, payload: error });
		}
	} catch (err) {
		// dispatch(addError(err.response.data.msg));
		console.log({ err });
		dispatch({ type: c.LOGIN.ERROR, payload: err });
	}
};

export const signup = credentials => async dispatch => {
	dispatch({ type: c.SIGNUP.START });
	try {
		const { data, error } = await api.signup(credentials);
		if (!error) {
			dispatch({ type: c.SIGNUP.SUCCESS, payload: data });
			history.push('/signupSuccess');
		} else {
			dispatch(addError(error));
			dispatch({ type: c.SIGNUP.ERROR, payload: error });
		}
	} catch (err) {
		// dispatch(addError(err.response.data.msg));
		dispatch({ type: c.SIGNUP.ERROR, payload: err });
	}
};

export const logout = () => ({ type: c.LOGOUT });
