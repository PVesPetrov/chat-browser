import React from 'react';
import Messages from './Messages';
import InputMsg from './InputMsg';

import './Chat.sass';

const Chat = () => {
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
