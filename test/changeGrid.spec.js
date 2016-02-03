'use strict';

var deepFreeze = require('deep-freeze');
var expect = require('expect');
var changeGrid = require('../reducers/changeGrid.js');

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

  describe('CREATE', () => {
    it('returns new empty board according action.width and action.height', () => {
      const gridBefore = [];
      const action = {
        type: 'CREATE',
        width: 5,
        height: 4
      };
      const gridAfter = [
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false]
      ];
      deepFreeze(gridBefore);
      deepFreeze(action);

      expect(
        changeGrid([], action)
      ).toEqual(gridAfter);

    });
  });

});
