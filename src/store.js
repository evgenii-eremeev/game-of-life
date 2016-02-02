'use strict';

function grid(state = [], action) {
  switch (action.type) {
    case 'NEXT_GEN':
      return nextGen(state);
    default:
      return state;
  }
}
