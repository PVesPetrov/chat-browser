import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { isEmpty, isEmail, isLength } from 'validator';
import { signup } from 'actions/login';
import LoginContainer from 'components/LoginContainer';

const { Control, Group } = Form;

class Signup extends Component {
	state = {
		firstname: '',
		lastname: '',
		email: '',
		nickname: '',
		password: '',
		repeatPassword: '',
		errors: {},
		validated: false,
	};

	handleChange = e => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = e => {
		e.preventDefault();
		const { firstname, lastname, email, nickname, password, repeatPassword, errors } = this.state;
		const { signup } = this.props;
		this.validate();
		this.setState({ validated: true });
		if (Object.keys(errors).length) {
			signup({
				firstname,
				lastname,
				email,
				nickname,
				password,
				repeatPassword,
			});
		} else {
			console.log('something is wrong', this.state);
		}
	};

	validate = () => {
		const { firstname, lastname, email, nickname, password, repeatPassword } = this.state;
		const errors = {};
		if (isEmpty(firstname)) errors.firstname = 'Field is required';
		if (isEmpty(lastname)) errors.lastname = 'Field is required';
		if (isEmpty(nickname)) errors.nickname = 'Field is required';
		if (isEmail(email)) errors.nickname = 'Field is not a valid email';
		if (isLength(password, { min: 6, max: 12 }))
			errors.password = 'Field must containe between 6 and 12 characters';
		if (password === repeatPassword) errors.repeatPassword = 'Passwords should match.';
	};

	render() {
		const fields = [
			{
				key: 'firstname',
				placeholder: 'First Name',
				type: 'text',
				rules: [{ requred: true, message: 'Field is required' }],
			},
			{
				key: 'lastname',
				placeholder: 'Last Name',
				type: 'text',
				rules: [{ requred: true, message: 'Field is required' }],
			},
			{
				key: 'nickname',
				placeholder: 'Nickname',
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

		const { state } = this;
		return (
			<LoginContainer>
				<h3>Signup</h3>
				<Form onSubmit={this.handleSubmit} validated={this.state.validated}>
					{fields.map(f => (
						<Group key={f.key}>
							<Control
								required
								type={f.type}
								name={f.key}
								value={state[f]}
								onChange={this.handleChange}
								placeholder={f.placeholder}
							/>
							<Control.Feedback type='invalid'>{this.state.errors[f.key]}</Control.Feedback>
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
	}
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
	signup,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Signup);
