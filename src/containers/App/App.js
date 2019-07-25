import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from 'containers/Header';
import Public from 'containers/Public';
import Private from 'containers/Private';
import Error from 'components/Error';
import { connectSocket } from 'actions/socket';

import './App.sass';

const App = ({ isAuth, connectSocket }) => {
	useEffect(() => {
		connectSocket();
	}, [connectSocket]);
	return (
		<div className='app-container'>
			<Header />
			<main className='app-main'>
				<Error />
				<div className='app-main-container'>{isAuth ? <Private /> : <Public />}</div>
			</main>
		</div>
	);
};

App.propTypes = {
	isAuth: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
	isAuth: !!state.login.user.token,
});

const mapDispatchToProps = {
	connectSocket,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(App);
