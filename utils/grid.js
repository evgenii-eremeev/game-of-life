'use strict';

function mod(n, m) {
  return ((n % m) + m) % m;
};


export default (function grid() {
  const create = (width, heigth, random = 0) => {
    let cell;
    let grid = [];
    let row;
    for (let i = 0; i < heigth; i++) {
      row = [];
      for (let j = 0; j < width; j++) {
        cell = random ? 
          Math.random() > (1 - random) : false;
        row.push(cell);
      }
      grid.push(row);
    }
    return grid;
  }; // end create

  const liveNeighbours = (grid, row, col) => {
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

  const nextGen = (grid) => {
    const newGrid = [];
    for (let i = 0; i < grid.length; i++) {
      let row = [];
      for (var j = 0; j < grid[0].length; j++) {
        let alive = liveNeighbours(grid, i, j);
        let cell = grid[i][j] ?
          alive === 2 || alive === 3 :
          alive === 3;
        row.push(cell);
      }
      newGrid.push(row);
    }
    return newGrid;
  };

  const toggleCell = (grid, row, col) => {
    const newGrid = grid.map(list => list.slice());
    newGrid[row][col] = !newGrid[row][col];
    return newGrid;
  };

  return { create, liveNeighbours, nextGen, toggleCell };
}());


