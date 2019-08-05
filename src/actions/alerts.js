import * as c from 'constants/alerts';

export const addAlert = (
	mssg = 'Alert',
	{ selfDismiss = false, dismissible = true, variant = 'primary' } = {},
) => {
	return {
		type: c.SHOW_ALERT,
		payload: {
			mssg,
			selfDismiss: selfDismiss === true ? 2500 : selfDismiss,
			dismissible,
			variant,
		},
	};
};

export const dismissAlert = () => ({
	type: c.DISMISS_ALERT,
});
