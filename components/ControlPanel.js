'use strict';

import React from 'react';
import { connect } from 'react-redux';

import Next from './Next';
import Reset from './Reset';
import Controls from './Controls';
import Random from './Random';

const ControlPanel = () => {
	return (
		<div>
			<Next />
			<Controls />
			<Reset />
			<Random />
		</div>
	);
};

export default ControlPanel;