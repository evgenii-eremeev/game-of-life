import React from 'react';
import { connect } from 'react-redux';
import ControlPanel from './ControlPanel';

const InitButton = ({ createGrid, width, height }) => (
	<button	onClick={() => createGrid(width, height)}>
		{width} x {height}
	</button>
);

const mapStateToProps = (state, ownProps) => {
  return {
    width: ownProps.width,
    height: ownProps.height
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createGrid: (width, height) => {
      dispatch({
      	type: 'CREATE',
      	width,
      	height
      });
      dispatch({
      	type: 'RESET_INTERVAL'
      });
    }
  }
};

const Init = connect(
  mapStateToProps,
  mapDispatchToProps
)(InitButton);

export default Init;
