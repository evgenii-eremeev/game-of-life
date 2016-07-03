// action types
export const NEXT_GEN = "NEXT_GEN";
export const CREATE = "CREATE";
export const TOGGLE_CELL = "TOGGLE_CELL";
export const RESET_GRID = "RESET_GRID";
export const RANDOM_GRID = "RANDOM_GRID";

// action creators
export function nextGen() {
  return {
    type: NEXT_GEN
  };
}

export function createGrid(width, height) {
  return {
    type: CREATE,
    width,
    height
  };
}

export function toggleCell(row, col) {
  return {
    type: TOGGLE_CELL,
    row,
    col
  };
}

export function resetGrid() {
  return {
    type: RESET_GRID
  };
}

export function randomGrid(chance) {
  return {
    type: RANDOM_GRID,
    chance
  };
}
