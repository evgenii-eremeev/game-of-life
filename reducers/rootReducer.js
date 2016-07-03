import { combineReducers } from 'redux';
import changeGridReducer from './changeGridReducer';

const rootReducer = combineReducers({
  changeGrid: changeGridReducer
});

export default rootReducer;
