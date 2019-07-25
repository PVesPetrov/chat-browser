/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import getWidth from 'utils/getWidth';
import { logout } from 'actions/login';

import './Header.sass';

const HeaderLink = ({ name = '', address = '/', style = {}, exact = false }) => (
	<NavLink
		className='nav-link'
		exact={exact}
		activeClassName='active'
		style={{ ...style }}
		to={address}
	>
		{name}
	</NavLink>
);

const navLinks = [
	{ name: 'Home', address: '/', exact: true },
	{ name: 'Profile', address: '/profile' },
	{ name: 'Blog', address: '/blog' },
	{ name: 'Gallery', address: '/gallery' },
];

const Navigation = ({ vertical = true, style = {} }) => (
	<nav className='header-nav' style={{ ...style, flexDirection: vertical ? 'column' : 'row' }}>
		{[navLinks.map(link => <HeaderLink key={link.address} {...link} />)]}
	</nav>
);

const LoginLink = ({ isMobile }) => (
	<div className='nav-login'>
		{isMobile ? (
			<Link to='/login'>
				<i style={{ cursor: 'pointer' }} className='fas fa-sign-in-alt' />
			</Link>
		) : (
			<>
				<NavLink to='/signup'>Signup</NavLink>
				<span className='horizontal-divider' />
				<NavLink to='/login'>Login</NavLink>
			</>
		)}
	</div>
);

const Logo = () => {
	return (
		<div className='navbar-brand'>
			<h2>
				<Link to='/'>Chat App</Link>
			</h2>
		</div>
	);
};

const AuthHeader = ({ isMobile, logout }) => (
	<>
		{isMobile ? (
			<Dropdown alignRight drop='down' style={{ marginLeft: 'auto' }}>
				<Dropdown.Toggle as='div' id='toggle-menu-bar' style={{ alignSelf: 'stretch' }}>
					<i style={{ cursor: 'pointer' }} className='fas fa-bars' />
				</Dropdown.Toggle>
				<Dropdown.Menu>
					<Navigation vertical={isMobile} />
					<div
						className='nav-link'
						style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
					>
						<span title='Log out' onClick={() => logout()}>
							Log out
						</span>
						<i title='Log out' onClick={() => logout()} className='fas fa-sign-out-alt' />
					</div>
				</Dropdown.Menu>
			</Dropdown>
		) : (
			<>
				<Navigation vertical={isMobile} />
				<i
					title='Log out'
					style={{ marginLeft: 'auto' }}
					onClick={() => logout()}
					className='fas fa-sign-out-alt nav-link'
				/>
			</>
		)}
	</>
);

const Header = ({ user, logout }) => {
	const width = getWidth();
	const isMobile = width < 500;
	return (
		<div className='header-container'>
			{user.token ? (
				<>
					<Logo />
					<AuthHeader isMobile={isMobile} user={user} logout={logout} />
				</>
			) : (
				<>
					<Logo />
					<LoginLink isMobile={isMobile} />
				</>
			)}
		</div>
	);
};

const mapStateToProps = state => ({
	user: state.login.user,
});

const mapDispatchToProps = {
	logout,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Header);
