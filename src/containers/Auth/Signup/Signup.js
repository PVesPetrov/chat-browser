import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { isEmpty, isEmail, isLength } from 'validator';
import { signup } from 'actions/login';
import LoginContainer from 'components/LoginContainer';

const { Control, Group } = Form;

const Signup = () => {
	const dispatch = useDispatch();
	const [state, setState] = useState({
		firstName: '',
		lastName: '',
		email: '',
		nickName: '',
		password: '',
		repeatPassword: '',
		errors: {},
		validated: false,
	});

	const handleChange = e => {
		const { name, value } = e.target;
		setState({ ...state, [name]: value });
	};

	const validate = () => {
		const { firstName, lastName, email, nickName, password, repeatPassword } = state;
		const errors = {};
		if (isEmpty(firstName)) errors.firstName = 'Field is required';
		if (isEmpty(lastName)) errors.lastName = 'Field is required';
		if (isEmpty(nickName)) errors.nickName = 'Field is required';
		if (isEmail(email)) errors.nickName = 'Field is not a valid email';
		if (isLength(password, { min: 6, max: 12 }))
			errors.password = 'Field must containe between 6 and 12 characters';
		if (password === repeatPassword) errors.repeatPassword = 'Passwords should match.';
		setState({ ...state, errors });
	};

	const handleSubmit = e => {
		e.preventDefault();
		const { firstName, lastName, email, nickName, password, errors } = state;
		validate();
		setState({ ...state, validated: true });
		if (!Object.keys(errors).length) {
			dispatch(
				signup({
					firstName,
					lastName,
					email,
					nickName,
					password,
				}),
			);
		} else {
			console.log('something is wrong', state);
		}
	};

	const fields = [
		{
			key: 'firstName',
			placeholder: 'First Name',
			type: 'text',
			rules: [{ requred: true, message: 'Field is required' }],
		},
		{
			key: 'lastName',
			placeholder: 'Last Name',
			type: 'text',
			rules: [{ requred: true, message: 'Field is required' }],
		},
		{
			key: 'nickName',
			placeholder: 'NickName',
			type: 'text',
			rules: [{ requred: true, message: 'Field is required' }],
		},
		{
			key: 'email',
			placeholder: 'Email',
			type: 'email',
			rules: [{ requred: true, message: 'Field is required' }],
		},
		{ key: 'password', placeholder: 'Password', type: 'password' },
		{ key: 'repeatPassword', placeholder: 'Confirm password', type: 'password' },
	];

	return (
		<LoginContainer>
			<h3>Signup</h3>
			<Form onSubmit={handleSubmit} validated={state.validated}>
				{fields.map(f => (
					<Group key={f.key}>
						<Control
							required
							type={f.type}
							name={f.key}
							value={state[f]}
							onChange={handleChange}
							placeholder={f.placeholder}
						/>
						{state.errors[f.key] && (
							<Control.Feedback type='invalid'>{state.errors[f.key]}</Control.Feedback>
						)}
					</Group>
				))}
				<Group style={{ display: 'flex', alignContent: 'flex-end' }}>
					<Button type='submit'>Signup</Button>
					<Link style={{ marginLeft: 'auto', alignSelf: 'flex-end' }} to='/login'>
						Login
					</Link>
				</Group>
			</Form>
		</LoginContainer>
	);
};

export default Signup;
