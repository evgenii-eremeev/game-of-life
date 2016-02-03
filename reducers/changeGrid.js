'use strict';

const grid = require('../utils/grid.js')();

function changeGrid(state = [], action) {
  switch (action.type) {
    case 'NEXT_GEN':
      return grid.nextGen(state);
    default:
      return state;
  }
}

module.exports = changeGrid;
