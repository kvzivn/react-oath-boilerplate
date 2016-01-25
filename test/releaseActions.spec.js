import expect from 'expect';
import { ADD_RELEASE, REMOVE_RELEASE } from '../js/constants/releaseTypes';
import { addRelease, removeRelease } from '../js/actions/releaseActions';

describe('releaseActions', () => {
	describe('addRelease', () => {
		it('should create correct actions', () => {
			const payload = {
				release: 'Lorem ipsum',
				artist: 'Jane Doe',
				id: 1,
			};
			const actual = addRelease(payload);
			const expected = {
				type: ADD_RELEASE,
				payload
			};
			expect(actual).toEqual(expected);
		});
	});

	describe('removeRelease', () => {
		it('should create correct actions', () => {
			const payload = {
				id: 1
			};
			const actual = removeRelease(payload);
			const expected = {
				type: REMOVE_RELEASE,
				payload
			};
			expect(actual).toEqual(expected);
		});
	});
});
