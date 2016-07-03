import React from 'react';
import { connect } from 'react-redux';
import { createGrid } from '../actions/changeGridActions.js';

function SizeButton({ dispatch, width, height }) {
	return (
		<button	onClick={() => dispatch(createGrid(width, height))}>
			{width} x {height}
		</button>
	);
};

export default connect()(SizeButton);
