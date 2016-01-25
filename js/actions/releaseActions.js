import * as types from '../constants/releaseTypes';

export function addRelease(payload) {
	return {
		type: types.ADD_RELEASE,
		payload
	};
}

export function removeRelease(payload) {
	return {
		type: types.REMOVE_RELEASE,
		payload
	};
}
