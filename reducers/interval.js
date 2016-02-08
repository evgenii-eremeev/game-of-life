'use strict';

export default function interval(state = null, action) {
	switch (action.type) {
		case 'SET_INTERVAL':
			return action.interval;
		case 'RESET_INTERVAL':
			clearInterval(state);
			return null;
		default:
			return state;
		}
}
