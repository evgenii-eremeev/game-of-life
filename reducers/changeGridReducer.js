import grid from '../utils/grid';

import {
  NEXT_GEN, CREATE, TOGGLE_CELL, RESET_GRID, RANDOM_GRID
} from "../actions/changeGridActions.js";

export default function changeGrid(state = [], action) {
  switch (action.type) {
    case NEXT_GEN:
      return grid.nextGen(state);
    case CREATE:
      return grid.create(action.width, action.height);
   	case TOGGLE_CELL:
   	  return grid.toggleCell(state, action.row, action.col);
    case RESET_GRID:
      return grid.create(state[0].length, state.length);
    case RANDOM_GRID:
      return grid.create(
        state[0].length,
        state.length,
        action.chance
      );
    default:
      return state;
  }
}
