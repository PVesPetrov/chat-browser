import React from 'react';
import PropTypes from 'prop-types';

const SuccessPage = ({ title = 'Success', message = 'You completed the task successfully' }) => {
	return (
		<div>
			<h2>{title}</h2>
			<p>{message}</p>
		</div>
	);
};

SuccessPage.propTypes = {
	title: PropTypes.string,
	message: PropTypes.string,
};

export default SuccessPage;
