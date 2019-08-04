import io from 'socket.io-client';
import * as c from 'constants/socket';

const socket = io('http://localhost:5500');

export const connectSocket = () => async (dispatch, getState) => {
	dispatch({ type: c.CONNECT_SOCKET });
	// const state = getState();
	try {
		socket.connect();
		socket.on('connect', () => {
			dispatch({ type: c.CONNECT_SOCKET.SUCCESS });
		});
	} catch (err) {
		console.log(err);
	}
};

export const sendMessage = data => async dispatch => {
	socket.emit('message', data);
	dispatch({ type: c.SEND_MESSAGE, data });
};
