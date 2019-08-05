import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { dismissAlert } from 'actions/alerts';
import { getAlert } from 'reducers/alerts';

import './GlobalAlert.sass';

const GlobalAlert = () => {
	const { mssg, selfDismiss, variant, dismissible } = useSelector(getAlert);
	const dispatch = useDispatch();
	const closeAlert = () => dispatch(dismissAlert());
	if (selfDismiss) {
		setTimeout(() => {
			dispatch(dismissAlert());
		}, selfDismiss);
	}
	return mssg ? (
		<div className='global-alert'>
			<Alert variant={variant} onClose={closeAlert} dismissible={dismissible}>
				{mssg}
			</Alert>
		</div>
	) : null;
};

Error.propTypes = {
	error: PropTypes.shape({
		msg: PropTypes.string,
		open: PropTypes.bool,
		delay: PropTypes.number,
	}).isRequired,
	dismissError: PropTypes.func.isRequired,
};

export default GlobalAlert;
