import expect from 'expect';

import rootReducer from '../reducers/rootReducer.js';
import { nextGen } from '../actions/changeGridActions.js';

describe('nextGen', function () {

  it('changes state to the next generation state', function () {
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

    expect(
      rootReducer(stateBefore, action)
    ).toEqual(stateAfter);

    expect(
      rootReducer(stateAfter, action)
    ).toEqual(stateBefore);

  });

});
