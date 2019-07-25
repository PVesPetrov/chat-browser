import * as c from 'constants/error';

const initState = {
	show: false,
	msg: '',
	delay: null,
};

export default (state = initState, { type, ...data }) => {
	switch (type) {
		case c.SHOW_ERROR:
			return {
				...state,
				...data,
				show: true,
			};
		case c.DISMISS_ERROR:
			return initState;
		default:
			return state;
	}
};
