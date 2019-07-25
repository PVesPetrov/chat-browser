import React from 'react';
import './Sidenav.sass';

const Sidenav = () => {
	return (
		<div className='app-sidenav'>
			{['Tommy', 'Sofia', 'Kalisto', 'Krum'].map(user => (
				<div key={user}>{user}</div>
			))}
		</div>
	);
};

export default Sidenav;
