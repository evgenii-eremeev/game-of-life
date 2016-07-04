import React from 'react';
import { connect } from 'react-redux';

import {
	nextGen, randomGrid, resetGrid, createGrid
} from '../actions/changeGridActions.js';

class ControlPanel extends React.Component {

	constructor (props) {
		super(props);

		this._onStartClick = this._onStartClick.bind(this);
		this._onStopClick = this._onStopClick.bind(this);
		this._onNextClick = this._onNextClick.bind(this);
		this._onRandomClick = this._onRandomClick.bind(this);
		this._onResetClick = this._onResetClick.bind(this);

		this.state = {
			intervalId: null,
			gen: 0
		}
	}

	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(createGrid(50, 30));
		dispatch(randomGrid(0.3));
		this._onStartClick();
	}

	componentWillUnmount() {
		this._onStopClick();
	}

	_onStartClick() {
		const { dispatch } = this.props;
		if (!this.state.intervalId) {
			this.setState({
				intervalId: setInterval(this._onNextClick, 500)
			});
		}
	};

	_onStopClick() {
		clearInterval(this.state.intervalId);
		this.setState({ intervalId: null });
	}

	_onNextClick() {
		this.props.dispatch(nextGen());
		this.setState({
			gen: this.state.gen + 1
		})
	}

	_onRandomClick() {
		this.props.dispatch(randomGrid(0.4));
	}

	_onResetClick() {
		this.props.dispatch(resetGrid());
		this._onStopClick(); // clearInterval
		this.setState({ gen: 0 });
	};

	render () {
		return (
			<div>
				<button	onClick={this._onStartClick} className="start">
					Start
				</button>
				<button	onClick={this._onStopClick} className="stop">
					Stop
				</button>
				<button	onClick={this._onNextClick} className="next">
					Next
				</button>
				<button onClick={this._onRandomClick} className="random">
					Random
				</button>
				<button onClick={this._onResetClick} className="reset">
					Reset
				</button>
				<p className="generation">Generation: {this.state.gen}</p>
			</div>
		);
	}
}

export default connect()(ControlPanel);
