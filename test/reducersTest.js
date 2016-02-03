'use strict';

const deepFreeze = require('deep-freeze');
const expect = require('expect');

const changeGrid = require('../reducers/changeGrid.js');

describe('changeGrid', () => {
  describe('NEXT_GEN', () => {
    it('if passed "undefined" should return []', () => {
      const action = { type: 'NEXT_GEN'}
      expect(
        changeGrid(undefined, action)
      ).toEqual([]);
    });

    it('should return right next generation', () => {
      const gridBefore = [
        [false, false, false, false, false],
        [false, false, false, false, false],
        [true, true, true, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false]
      ];
      const action = { type: 'NEXT_GEN'}
      const gridAfter = [
        [false, false, false, false, false],
        [false, true, false, false, false],
        [false, true, false, false, false],
        [false, true, false, false, false],
        [false, false, false, false, false]
      ];

      deepFreeze(gridBefore);
      deepFreeze(action);

      expect(
        changeGrid(gridBefore, action)
      ).toEqual(gridAfter);
    });

    it('returns state if type of action is not recognized', () => {
      const gridBefore = [
        [false, false],
        [false, false]
      ]
      deepFreeze(gridBefore);

      expect(
        changeGrid(gridBefore, {})
      ).toEqual(gridBefore);
    });
  });

});
