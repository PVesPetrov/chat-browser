import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from 'containers/Homepage';
import Login from 'containers/Auth/Login';
import Signup from 'containers/Auth/Signup';
import SuccessSignup from 'containers/Auth/SuccessSignup';

import './Public.sass';

const Home = () => {
	return (
		<div className='app-home'>
			<Switch>
				<Route exact path='/' component={Homepage} />
				<Route path='/signupSuccess' component={SuccessSignup} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/signup' component={Signup} />
			</Switch>
		</div>
	);
};

export default Home;
