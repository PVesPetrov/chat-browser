import * as c from 'constants/alerts';

const initState = {
	show: false,
	msg: '',
	delay: null,
};

export default (state = initState, { type, payload }) => {
	switch (type) {
		case c.SHOW_ALERT:
			return {
				...payload,
				show: true,
			};
		case c.DISMISS_ALERT:
			return initState;
		default:
			return state;
	}
};

export const getAlert = state => state.alerts;
