'use strict';

import React from 'react';
import { connect } from 'react-redux';

const Canvas = ({ state, onCellClick }) => {
	const grid = state.map((row, i) => {
		let gridRow = row.map((cell, j) => {
			return (
				<td key={i + ',' + j}
					style={{
						backgroundColor: cell ? 
							'red' : 'black',
						width: 20,
						height: 20,
					}}
					onClick={() => onCellClick(i, j)}
				>
				</td>
			);
		});
		return <tr key={i}>{gridRow}</tr>
	});

	return (
		<div>
			<table>
				<tbody>
					{grid}
				</tbody>
			</table>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		state: state.changeGrid
  	}
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCellClick: (row, col) => {
      dispatch({
      	type: 'TOGGLE_CELL',
      	row,
      	col
      });
    }
  }
};

const CanvasGrid = connect(
	mapStateToProps,
	mapDispatchToProps
)(Canvas);


export default CanvasGrid;