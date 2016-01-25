import { ADD_RELEASE, REMOVE_RELEASE } from '../constants/releaseTypes';

export default function releaseReducer(state = [], action) {
	switch (action.type) {

		case ADD_RELEASE:
			return state
			.concat(action.payload);

		case REMOVE_RELEASE:
			return state
			.filter(release => release.id !== action.payload.id);

		default:
			return state;
	}
}
