import React from 'react';
import { connect } from 'react-redux';

import { nextGen } from '../actions/changeGridActions.js';

function ControlButtons ({ dispatch }) {
	let intervalId;

	const intervalCallback = () => dispatch(nextGen());
	const onStartClick = () => {
		if (!intervalId) {
			intervalId = setInterval(intervalCallback, 1000);
		}
	};
	const onStopClick = () => {
		clearInterval(intervalId);
		intervalId = null;
	};

	return (
		<div>
			<button	onClick={ onStartClick }>
				Start
			</button>
			<button	onClick={ onStopClick }>
				Stop
			</button>
		</div>
	);
};

export default connect()(ControlButtons);
