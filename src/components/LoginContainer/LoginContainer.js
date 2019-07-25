import React from 'react';
import PropTypes from 'prop-types';

import './LoginContainer.sass';

const LoginContainer = ({ children = null }) => {
	return <div className='login-container'>{children}</div>;
};

LoginContainer.propTypes = {
	children: PropTypes.node,
};

export default LoginContainer;
