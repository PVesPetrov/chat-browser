import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { connectSocket } from 'actions/socket';
import Messages from './Messages';
import InputMsg from './InputMsg';

import './Chat.sass';

const Chat = () => {
	const dispatch = useDispatch();
	useEffect(() => {
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
