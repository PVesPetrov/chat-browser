import React from 'react';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'reducers/login';
import Header from 'containers/Header';
import Public from 'containers/Public';
import Private from 'containers/Private';
import GlobalAlert from 'components/GlobalAlert';

import './App.sass';

const App = () => {
	const isLoggedIn = useSelector(getIsLoggedIn);
	return (
		<div className='app-container'>
			<Header />
			<main className='app-main'>
				<GlobalAlert />
				<div className='app-main-container'>{isLoggedIn ? <Private /> : <Public />}</div>
			</main>
		</div>
	);
};

export default App;
