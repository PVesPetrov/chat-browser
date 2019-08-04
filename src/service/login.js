import axios from 'axios';

export const login = credentials =>
	axios({
		method: 'POST',
		url: 'http://localhost:4400/login',
		data: credentials,
	});

export const signup = credentials =>
	axios({
		method: 'POST',
		url: 'http://localhost:4400/signup',
		data: credentials,
	});
