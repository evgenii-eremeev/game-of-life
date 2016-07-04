import React from 'react';
import { connect } from 'react-redux';
import { toggleCell } from '../actions/changeGridActions.js';

const Grid = ({ state, dispatch }) => {
	const grid = state.map((row, i) => {
		let gridRow = row.map((cell, j) => {
			return (
				<td key={i + ',' + j}
					className={'cell ' + (cell ? 'cell-alive' : 'cell-dead')}
					onClick={() => dispatch(toggleCell(i, j))}
				>
				</td>
			);
		});
		return <tr key={i}>{gridRow}</tr>
	});

	return (
		<table className="grid">
			<tbody>
				{grid}
			</tbody>
		</table>
	);
};

const mapStateToProps = (state) => {
	return { state };
};

export default connect(mapStateToProps)(Grid);
