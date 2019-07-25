import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SideNav from 'containers/Sidenav';
import Chat from 'containers/Chat';

const Private = () => {
	return (
		<>
			<SideNav />
			<Switch>
				<Route path='/:channel?' component={Chat} />
			</Switch>
		</>
	);
};

export default Private;
