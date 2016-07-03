import expect from 'expect';
import deepFreeze from 'deep-freeze';

import changeGridReducer from '../reducers/changeGridReducer.js';
import {
  nextGen, createGrid, toggleCell, resetGrid, randomGrid
} from '../actions/changeGridActions.js';

describe('nextGen', function () {

  it('Changes state to the next generation state', function () {
    const stateBefore = [
      [false, false, false, false, false],
      [false, false, false, false, false],
      [false, true, true, true, false],
      [false, false, false, false, false],
      [false, false, false, false, false]
    ];
    const stateAfter = [
      [false, false, false, false, false],
      [false, false, true, false, false],
      [false, false, true, false, false],
      [false, false, true, false, false],
      [false, false, false, false, false]
    ];
    const action = nextGen();

    deepFreeze(stateBefore);
    deepFreeze(stateAfter);
    expect(
      changeGridReducer(stateBefore, action)
    ).toEqual(stateAfter);

    expect(
      changeGridReducer(stateAfter, action)
    ).toEqual(stateBefore);

  });

  it('Creates new grid with specified hight and width', function () {

    const stateBefore = [];
    const action = createGrid(2, 2);
    const stateAfter = [
      [false, false],
      [false, false]
    ];

    deepFreeze(stateBefore);
    expect(
      changeGridReducer(stateBefore, action)
    ).toEqual(stateAfter);

  });

  it('Toggles given cell', function () {

    const stateBefore = [
      [true, false],
      [false, false]
    ];
    const action = toggleCell(0, 0);
    const stateAfter = [
      [false, false],
      [false, false]
    ];

    deepFreeze(stateBefore);
    expect(
      changeGridReducer(stateBefore, action)
    ).toEqual(stateAfter);

  });

  it('Resets grid. All cells should have false values', function () {

    const stateBefore = [
      [true, false],
      [false, true]
    ];
    const action = resetGrid();
    const stateAfter = [
      [false, false],
      [false, false]
    ];

    deepFreeze(stateBefore);
    expect(
      changeGridReducer(stateBefore, action)
    ).toEqual(stateAfter);

  });

  describe('randomGrid', function() {

    it('Returns new random grid', function () {

      const stateBefore = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
      ];
      const action = randomGrid(0.4);
      deepFreeze(stateBefore);

      // returns different grid
      expect(
        changeGridReducer(stateBefore, action)
      ).toNotEqual(stateBefore);

      // returns grid with same dementions
      // height
      expect(
        changeGridReducer(stateBefore, action).length
      ).toBe(stateBefore.length);
      // width
      expect(
        changeGridReducer(stateBefore, action)[0].length
      ).toBe(stateBefore[0].length);

    });

    it('Returns same grid, if random chance equal to "0"', function () {

      const stateBefore = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
      ];
      const action = randomGrid(0);
      deepFreeze(stateBefore);

      // returns same grid
      expect(
        changeGridReducer(stateBefore, action)
      ).toEqual(stateBefore);

    });

    it('Returns grid where all cell are "true", if random chance equal to "1"', function () {

      const stateBefore = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
      ];
      const action = randomGrid(1);
      const stateAfter = [
        [true, true, true],
        [true, true, true],
        [true, true, true]
      ];
      deepFreeze(stateBefore);

      expect(
        changeGridReducer(stateBefore, action)
      ).toEqual(stateAfter);

    });

  }); // describe randomGrid

});
