import * as c from 'constants/login';
import * as api from 'service/login';
import history from '../history';
import { addAlert } from './alerts';

export const login = credentials => async dispatch => {
	dispatch({ type: c.LOGIN.START });
	try {
		const { data } = await api.login(credentials);
		dispatch({ type: c.LOGIN.SUCCESS, payload: data.data[0] });
		history.push('/home');
	} catch (err) {
		dispatch(addAlert(err.response.data.error, { variant: 'danger', selfDismiss: true }));
		dispatch({ type: c.LOGIN.ERROR, payload: err });
	}
};

export const signup = credentials => async dispatch => {
	dispatch({ type: c.SIGNUP.START });
	try {
		const { data } = await api.signup(credentials);
		dispatch({ type: c.SIGNUP.SUCCESS, payload: data });
		history.push('/signupSuccess');
	} catch (err) {
		dispatch(addAlert(err.response.data.msg, { variant: 'danger', selfDismiss: true }));
		dispatch({ type: c.SIGNUP.ERROR, payload: err });
	}
};

export const logout = () => ({ type: c.LOGOUT });
