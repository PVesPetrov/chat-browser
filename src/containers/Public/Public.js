import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from 'containers/Homepage';
import Login from 'containers/Login';
import Signup from 'containers/Signup';

import './Public.sass';

const Home = () => {
	return (
		<div className='app-home'>
			<Switch>
				<Route exact path='/' component={Homepage} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/signup' component={Signup} />
			</Switch>
		</div>
	);
};

export default Home;
