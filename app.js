'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Reducers
import gameOfLife from './reducers/gameOfLife'

// Components
import CanvasGrid from './components/CanvasGrid';
import Init from './components/Init';
import ControlPanel from './components/ControlPanel';

const store = createStore(gameOfLife);

const App = () => (
	<div>
		<CanvasGrid />
		<Init width={20} height={10} />
		<Init width={30} height={20} />
		<br />
		<ControlPanel />
	</div>
);

ReactDOM.render(
	<Provider store={store}>
  		<App />
  	</Provider>,
  	document.getElementById('root')
);
