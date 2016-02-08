'use strict';

import React from 'react';
import { connect } from 'react-redux';

let Reset = ({ onResetClick }) => {
	return (
		<button onClick={onResetClick}>
			Reset
		</button>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
    	onResetClick: () => {
	      	dispatch({
	      		type: 'RESET_GRID'
	      	});
	      	dispatch({
	      		type: 'RESET_INTERVAL'
	      	});
    	}
  	};
};

Reset = connect(
	null,
	mapDispatchToProps
)(Reset);

export default Reset;

