'use strict';

import { combineReducers } from 'redux';
import changeGrid from './changeGrid';
import interval from './interval';


const GameOfLife = combineReducers({
  changeGrid,
  interval
});

export default GameOfLife;