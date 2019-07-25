/* eslint-disable import/no-extraneous-dependencies */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'middleware/logger';
import reducer from 'reducers';

const middleware = [thunk, logger];

export default () => {
	const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));
	return store;
};
