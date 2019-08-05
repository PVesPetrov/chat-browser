import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import io from 'socket.io-client';
// import * as c from 'constants/socket';
import { connectSocket } from 'actions/socket';
import Messages from './Messages';
import InputMsg from './InputMsg';

import './Chat.sass';

const Chat = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		// const socket = io('http://localhost:5500');
		dispatch(connectSocket());
	}, [dispatch]);
	return (
		<div className='chat'>
			<div className='chat-messages'>
				<Messages />
			</div>
			<div className='chat-input'>
				<InputMsg />
			</div>
		</div>
	);
};

export default Chat;
