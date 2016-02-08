'use strict';

import React from 'react';
import { connect } from 'react-redux';

import Next from './Next';
import Reset from './Reset';
import Controls from './Controls';

const ControlPanel = () => {
	return (
		<div>
			<Next />
			<Controls />
			<Reset />
		</div>
	);
};

export default ControlPanel;