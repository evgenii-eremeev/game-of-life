'use strict';

// modulo
function mod(n, m) {
  return ((n % m) + m) % m;
};

// creates new grid
function create (width, heigth, random = 0) {
  let cell, grid = [], row;
  for (let i = 0; i < heigth; i++) {
    row = [];
    for (let j = 0; j < width; j++) {
      cell = random ? Math.random() > (1 - random) : false;
      row.push(cell);
    }
    grid.push(row);
  }
  return grid;
}; // end create

function liveNeighbours (grid, row, col) {
  const width = grid[0].length;
  const height = grid.length;
  let alive = 0;

  for(let i = row - 1; i <= row + 1; i++) {
    for(let j = col - 1; j <= col + 1; j++) {
      if(i !== row || j !== col) {
        alive += +grid[mod(i, height)][mod(j, width)];
      }
    }
  }
  return alive;
};

function nextGen (grid) {
  const newGrid = [];
  for (let i = 0; i < grid.length; i++) {
    let row = [];
    for (var j = 0; j < grid[0].length; j++) {
      let alive = liveNeighbours(grid, i, j);
      // rules of the game of life
      let cell = grid[i][j] ?
        alive === 2 || alive === 3 :
        alive === 3;
      row.push(cell);
    }
    newGrid.push(row);
  }
  return newGrid;
};

function toggleCell (grid, row, col) {
  // copy grid
  const newGrid = grid.map(row => row.slice());
  newGrid[row][col] = !newGrid[row][col];
  return newGrid;
};

export default { create, liveNeighbours, nextGen, toggleCell };
