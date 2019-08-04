import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import { isEmail, isLength } from 'validator';
import { login } from 'actions/login';
import LoginContainer from 'components/LoginContainer';

const { Control, Group } = Form;

const InlineError = ({ message }) => <div style={{ color: 'red' }}>{message}</div>;

InlineError.propTypes = { message: PropTypes.string.isRequired };

const Login = () => {
	const dispatch = useDispatch();
	const [state, setState] = useState({
		email: '',
		password: '',
		validated: false,
	});

	const handleChange = e => {
		const { name, value } = e.target;
		setState({ ...state, [name]: value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		const { email, password } = state;
		console.log({ state });
		setState({ ...state, validated: true });
		if (isEmail(email) && isLength(password, { min: 6, max: 12 })) {
			dispatch(login({ email, password }));
		}
	};

	return (
		<LoginContainer>
			<h3>Login</h3>
			<Form noValidate onSubmit={handleSubmit}>
				<Group>
					<Control
						type='email'
						value={state.email}
						name='email'
						onChange={handleChange}
						placeholder='Email...'
					/>
					{!isEmail(state.email) && state.validated && (
						<InlineError message='Valid email is required.' />
					)}
				</Group>
				<Group>
					<Control
						type='password'
						value={state.password}
						name='password'
						onChange={handleChange}
						placeholder='Password...'
					/>
					{!isLength(state.password, { min: 6, max: 14 }) && state.validated && (
						<InlineError message='Password has to be between 6 and 14 digits.' />
					)}
				</Group>
				<Group style={{ display: 'flex', alignContent: 'flex-end' }}>
					<Button type='submit'>Log in</Button>
					<Link style={{ marginLeft: 'auto', alignSelf: 'flex-end' }} to='/signup'>
						Sign up
					</Link>
				</Group>
			</Form>
		</LoginContainer>
	);
};

export default Login;
