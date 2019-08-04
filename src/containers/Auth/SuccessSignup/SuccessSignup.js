import React from 'react';
import SuccessPage from 'components/SuccessPage';

const SuccessSignup = () => {
	const title = 'Account created successfully';
	const message = `Please, verify your account by opening the activation link sent to your email.`;
	return <SuccessPage title={title} message={message} />;
};

export default SuccessSignup;
