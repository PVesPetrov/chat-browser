import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { FormControl, Button } from 'react-bootstrap';
import { sendMessage } from 'actions/socket';

import './InputMsg.sass';

const InputMsg = () => {
	const dispatch = useDispatch();
	const [value, setValue] = useState('');
	const sendMssg = useCallback(() => dispatch(sendMessage(value)), [dispatch, value]);
	return (
		<div>
			<FormControl type='text' value={value} onChange={e => setValue(e.target.value)} />
			<Button onClick={() => sendMssg()}>Send</Button>
		</div>
	);
};

export default InputMsg;
