import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import { isEmail, isLength } from 'validator';
import { login } from 'actions/login';
import LoginContainer from 'components/LoginContainer';

const { Control, Group } = Form;

const InlineError = ({ message }) => <div style={{ color: 'red' }}>{message}</div>;

InlineError.propTypes = { message: PropTypes.string.isRequired };

class Login extends Component {
	state = {
		email: '',
		password: '',
		validated: false,
	};

	handleChange = e => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = e => {
		e.preventDefault();
		const { email, password } = this.state;
		this.setState({ validated: true });
		const { login } = this.props;
		if (isEmail(email) && isLength(password, { min: 6, max: 12 })) {
			login({ email, password });
		}
	};

	render() {
		const { email, password, validated } = this.state;
		return (
			<LoginContainer>
				<h3>Login</h3>
				<Form noValidate onSubmit={this.handleSubmit}>
					<Group>
						<Control
							type='email'
							value={email}
							name='email'
							onChange={this.handleChange}
							placeholder='Email...'
						/>
						{!isEmail(email) && validated && <InlineError message='Valid email is required.' />}
					</Group>
					<Group>
						<Control
							type='password'
							value={password}
							name='password'
							onChange={this.handleChange}
							placeholder='Password...'
						/>
						{!isLength(password, { min: 6, max: 14 }) && validated && (
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
	}
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
	login,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Login);
