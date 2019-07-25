import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { dismissError } from 'actions/error';

import './Error.sass';

const Error = ({ error: { msg = null, delay }, dismissError }) => {
	if (delay) {
		setTimeout(() => {
			dismissError();
		}, delay * 1000);
	}
	return msg ? (
		<div className='error-container bg-danger'>
			<div>
				<span className='error-msg'>{msg}</span>
				<span className='error-close' onClick={() => dismissError()}>
					<i className='fas fa-times' />
				</span>
			</div>
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

const mapStateToProps = state => ({
	error: state.error,
});

const mapDispatchToProps = {
	dismissError,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Error);
