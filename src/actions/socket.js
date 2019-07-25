import io from 'socket.io-client';
import * as c from 'constants/socket';

const socket = io('http://localhost:3300');

export const connectSocket = () => async dispatch => {
	dispatch({ type: c.CONNECT_SOCKET });
	try {
		socket.connect();
		socket.on('connect', () => {
			dispatch({ type: c.CONNECT_SOCKET_SUCCESS });
		});
	} catch (err) {
		console.log(err);
	}
};

export const sendMessage = data => async dispatch => {
	console.log('sendMessage', data);
	socket.emit('message', data);
	dispatch({ type: c.SEND_MESSAGE, data });
};
