import io from 'socket.io-client';
import * as c from 'constants/socket';

let socket;

export const connectSocket = () => async dispatch => {
	socket = io('http://localhost:5500');

	socket.on('connected', configs => {
		console.log({ configs });
		dispatch({ type: c.CONNECT_SOCKET.SUCCESS });
	});

	socket.on('message', data => {
		console.log(data);
	});
};

export const sendMessage = data => async dispatch => {
	socket.emit('message', data);
	dispatch({ type: c.SEND_MESSAGE, data });
};
