'use strict';

var grid = require('../utils/grid.js')();

function changeGrid(state = [], action) {
  switch (action.type) {
    case 'NEXT_GEN':
      return grid.nextGen(state);
    case 'CREATE':
      return grid.create(action.width, action.height);
    default:
      return state;
  }
}

module.exports = changeGrid;
