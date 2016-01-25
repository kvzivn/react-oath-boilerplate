import expect from 'expect';
import { addRelease, removeRelease } from '../js/actions/releaseActions';
import releaseReducer from '../js/reducers/releaseReducer';

describe('releaseReducer', () => {
	function stateBefore() {
		return [
			{
				release: 'Lorem ipsum',
				artist: 'Jane Doe',
				id: 1,
			},
			{
				release: 'Ullamco laboris nisi ut aliquip',
				artist: 'John Smith',
				id: 2,
			}
		];
	}

	it('should add releases by id', () => {
		const action = addRelease({
			release: 'This is a new release',
			artist: 'Someone awesome',
			id: 3,
		});

		const actual = releaseReducer(stateBefore(), action);

		const expected = [
			{
				release: 'Lorem ipsum',
				artist: 'Jane Doe',
				id: 1,
			},
			{
				release: 'Ullamco laboris nisi ut aliquip',
				artist: 'John Smith',
				id: 2,
			},
			{
				release: 'This is a new release',
				artist: 'Someone awesome',
				id: 3,
			}
		];
		expect(actual).toEqual(expected);
	});

	it('should remove releases by id', () => {
		const action = removeRelease({
			id: 1
		});
		const actual = releaseReducer(stateBefore(), action);
		const expected = [
			{
				release: 'Ullamco laboris nisi ut aliquip',
				artist: 'John Smith',
				id: 2,
			}
		];
		expect(actual).toEqual(expected);
	});

	it('should return previous state when trying to remove a release with a non-existant id', () => {
		const action = removeRelease({
			id: 521
		});
		const actual = releaseReducer(stateBefore(), action);
		const expected = stateBefore();
		expect(actual).toEqual(expected);
	});
});
