'use strict';

import React from 'react';
import { connect } from 'react-redux';

const NextButton = ({ onNextClick }) => {
	return (
		<button	onClick={onNextClick}>
			Next
		</button>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
    	onNextClick: () => {
	      	dispatch({
	      		type: 'NEXT_GEN',
	      	});
    	}
    };
};

const Next = connect(
	null,
	mapDispatchToProps
)(NextButton);

export default Next;
