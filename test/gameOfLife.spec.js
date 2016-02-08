import gameOfLife from '../reducers/gameOfLife';
import expect from 'expect';

describe('gameOfLife reducer', () => {
	describe('interval', () => {
		it('should SET_INTERVAL properly', () => {
			const stateBefore = {
				changeGrid: [],
				interval: null
			};
			const action = {
				type: 'SET_INTERVAL',
				interval: () => {}
			};
			const stateAfter = {
				changeGrid: [],
				interval: () => {}
			};

			expect(
				gameOfLife(stateBefore, action)
			).toEqual(stateAfter);
		});

		it('should RESET_INTERVAL properly', () => {
			const stateBefore = {
				changeGrid: [],
				interval: () => {}
			};
			const action = {
				type: 'RESET_INTERVAL'
			};
			const stateAfter = {
				changeGrid: [],
				interval: null
			};

			expect(
				gameOfLife(stateBefore, action)
			).toEqual(stateAfter);
		});
	});

	describe('changeGrid', () => {
		it('should changeGrid', () => {
			const stateBefore = {
				changeGrid: [],
				interval: () => {}
			};
			const action = {
				type: 'CREATE',
				width: 2,
				height: 3
			};
			const stateAfter = {
				changeGrid: [
					[false, false],
					[false, false],
					[false, false]
				],
				interval: () => {}
			};

			expect(
				gameOfLife(stateBefore, action)
			).toEqual(stateAfter);
		});
	});


});