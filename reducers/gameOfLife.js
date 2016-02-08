'use strict';

import { combineReducers } from 'redux';
import changeGrid from './changeGrid';
import interval from './interval';

export default combineReducers({
  changeGrid,
  interval
});