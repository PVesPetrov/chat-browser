const logger = () => next => action => {
	console.log('DISPATCHED: ', action.type, '\n', action);
	next(action);
};

export default logger;
