import expect from 'expect';
import { store } from '../js/store/store';

describe('store', () => {
	it('should initialize', () => {
		const actual = store.getState();
		const expected = {
			releases: []
		};
		expect(actual).toEqual(expected);
	});

	it('should work with a series of actions', () => {
		const actions = [
			{
				type: 'ADD_RELEASE',
				payload: {
					releaseName: 'Cash money',
					artist: '50 cent',
					id: 1
				}
			},
			{
				type: 'ADD_RELEASE',
				payload: {
					releaseName: 'Turnt',
					artist: 'Akon',
					id: 2
				}
			},
			{
				type: 'REMOVE_RELEASE',
				payload: { id: 1 }
			}
		];

		actions.forEach(action => store.dispatch(action));

		const actual = store.getState();
		const expected = {
			releases: [
				{
					releaseName: 'Turnt',
					artist: 'Akon',
					id: 2
				}
			]
		};

		expect(actual).toEqual(expected);
	});
});
