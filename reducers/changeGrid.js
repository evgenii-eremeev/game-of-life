'use strict';

import grid from '../utils/grid';

export default function changeGrid(state = [], action) {
  switch (action.type) {
    case 'NEXT_GEN':
      return grid.nextGen(state);
    case 'CREATE':
      return grid.create(action.width, action.height);
   	case 'TOGGLE_CELL':
   	  return grid.toggleCell(state, action.row, action.col);
    case 'RESET_GRID':
      return grid.create(state[0].length, state.length);
    default:
      return state;
  }
}
