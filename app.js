'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Reducers
import rootReducer from './reducers/rootReducer';

// Actions
import { createGrid, randomGrid } from './actions/changeGridActions.js';

// Components
import Grid from './components/Grid';
import SizeButton from './components/SizeButton';
import ControlPanel from './components/ControlPanel';

const store = createStore(rootReducer);

// initial state
store.dispatch(createGrid(20, 10));
store.dispatch(randomGrid(0.3));


const App = () => (
	<div className="center">
		<h1>Game of Life</h1>
		<ControlPanel />
		<Grid />
		<SizeButton width={20} height={10} />
		<SizeButton width={30} height={20} />
	</div>
);

ReactDOM.render(
		<Provider store={store}>
  		<App />
  	</Provider>,
  	document.getElementById('root')
);
