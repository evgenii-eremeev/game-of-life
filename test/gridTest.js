'use strict';

const deepFreeze = require('deep-freeze');
const expect = require('expect');

const grid = require('../utils/grid')();

describe('grid', () => {

  describe('grid.create()',  () => {
    it('should return right grid', () => {
      const result1 = [[false, false], [false, false]];
      const result2 = [
        [false, false],
        [false, false],
        [false, false]
      ];
      expect(
        grid.create(2, 2)
      ).toEqual(result1);
      expect(
        grid.create(2, 3)
      ).toEqual(result2);
    });
  });

  describe('grid.liveNeighbours()', () => {
    it('should return right amount of neigbours', () => {
      const grid1 = [
        [false, true, false],
        [false, false, false],
        [false, true, false]
      ];

      expect(
        grid.liveNeighbours(grid1, 1, 1)
      ).toEqual(2);

      const grid2 = [
        [true, true, true],
        [true, false, true],
        [true, true, true]
      ];

      expect(
        grid.liveNeighbours(grid2, 1, 1)
      ).toEqual(8);

      const grid3 = [
        [true, false, true],
        [false, true, false],
        [true, false, true]
      ];

      expect(
        grid.liveNeighbours(grid3, 1, 1)
      ).toEqual(4);

      const grid4 = [
        [false, false, true],
        [false, false, false],
        [true, false, true]
      ];

      expect(
        grid.liveNeighbours(grid4, 0, 0)
      ).toEqual(3);

      const grid5 = [
        [true, true, true],
        [true, true, true],
        [true, true, false]
      ];

      expect(
        grid.liveNeighbours(grid5, 2, 2)
      ).toEqual(8);

      const grid6 = [
        [false, false, false],
        [true, true, true],
        [false, false, false]
      ];

      expect(
        grid.liveNeighbours(grid6, 0, 0)
      ).toEqual(3);
    }); // end it
  }); // end describe

  describe('grid.nextGen()', () => {
    it('shoul return next gen according to rules of "Game of Life"', () => {
      const grid1 = [
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, true, true, true, false],
        [false, false, false, false, false],
        [false, false, false, false, false]
      ];
      const grid2 = [
        [false, false, false, false, false],
        [false, false, true, false, false],
        [false, false, true, false, false],
        [false, false, true, false, false],
        [false, false, false, false, false]
      ];

      deepFreeze(grid1);
      deepFreeze(grid2);

      expect(
        grid.nextGen(grid1)
      ).toEqual(grid2);

      expect(
        grid.nextGen(grid2)
      ).toEqual(grid1);

      const grid3 = [
        [false, false, false, false],
        [false, true, true, false],
        [false, true, true, false],
        [false, false, false, false],
      ];

      deepFreeze(grid3);

      expect(
        grid.nextGen(grid3)
      ).toEqual(grid3);

      const grid4 = [
        [false, false, false, false],
        [false, true, true, false],
        [false, false, false, false],
        [false, false, false, false],
      ];

      const grid5 = [
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
      ];

      deepFreeze(grid4);

      expect(
        grid.nextGen(grid4)
      ).toEqual(grid5);
    });
  }); // end describe
}); // end tests of grid
