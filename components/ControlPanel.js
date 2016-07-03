import React from 'react';
import { connect } from 'react-redux';

import {
	nextGen, randomGrid, resetGrid
} from '../actions/changeGridActions.js';

function ControlPanel ({ dispatch }) {
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
	const onNextClick = () => dispatch(nextGen());
	const onRandomClick = () => dispatch(randomGrid(0.4));
	const onResetClick = () => {
		dispatch(resetGrid());
		onStopClick(); // clearInterval
	};

	return (
		<div>
			<button	onClick={onStartClick}>
				Start
			</button>
			<button	onClick={onStopClick}>
				Stop
			</button>
			<button	onClick={onNextClick}>
				Next
			</button>
			<button onClick={onRandomClick}>
				Random
			</button>
			<button onClick={onResetClick}>
				Reset
			</button>
		</div>
	);
};

export default connect()(ControlPanel);
