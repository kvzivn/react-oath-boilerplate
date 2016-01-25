import releaseReducer from './releaseReducer';

export default function mainReducer(state = {}, action) {
	return {
		// other reducers go here
		releases: releaseReducer(state.releases, action)
	};
}
