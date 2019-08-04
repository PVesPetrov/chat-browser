import * as c from 'constants/error';

export const addError = (msg, delay = 20) => ({
	type: c.SHOW_ERROR,
	msg,
	delay,
});

export const dismissError = () => ({
	type: c.DISMISS_ERROR,
});
