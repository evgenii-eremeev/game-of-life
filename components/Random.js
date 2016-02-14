'use strict';

import React from 'react';
import { connect } from 'react-redux';

let Random = ({ onRandomClick }) => {
	return (
		<button onClick={onRandomClick}>
			Random
		</button>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
    	onRandomClick: () => {
	      	dispatch({
	      		type: 'RANDOM_GRID',
	      		chance: 0.4
	      	});
    	}
  	};
};

Random = connect(
	null,
	mapDispatchToProps
)(Random);

export default Random;


