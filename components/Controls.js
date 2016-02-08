'use strict';

import React from 'react';
import { connect } from 'react-redux';

const ControlButtons = ({
	onStartClick, 
	interval, 
	setTick, 
	resetTick
}) => {
	return (
		<div>
			<button onClick={() => {
				if (!interval) {
					setTick(setInterval(
							onStartClick,
							1000
						)
					);
				}
			}}>
				Start
			</button>
			<button onClick={() => {
				resetTick(interval);
			}}>
				Stop
			</button>
		</div>
	);
};


const mapStateToProps = (state) => {
	return {
		interval: state.interval
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
    	onStartClick: () => {
	      	dispatch({
	      		type: 'NEXT_GEN',
	      	});
    	},
    	setTick: (interval) => {
    		dispatch({
    			type: 'SET_INTERVAL',
    			interval
    		});
    	},
    	resetTick: (interval) => {
    		dispatch({
    			type: 'RESET_INTERVAL'
    		});
    	}
  	};
};

const Controls = connect(
	mapStateToProps,
	mapDispatchToProps
)(ControlButtons);


export default Controls;