import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Reducers
import rootReducer from './reducers/rootReducer';

// Components
import Grid from './components/Grid';
import ControlPanel from './components/ControlPanel';

const store = createStore(rootReducer);

const App = () => (
	<div className="center">
		<h1>Game of Life</h1>
		<ControlPanel />
		<Grid />
	</div>
);

ReactDOM.render(
		<Provider store={store}>
  		<App />
  	</Provider>,
  	document.getElementById('root')
);
