import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRelease, removeRelease } from './actions/releaseActions';
import AddRelease from './components/AddRelease';
import ReleaseList from './components/ReleaseList';

class AppContainer extends Component {
	render() {
		return (
			<div >
				<AddRelease addRelease={this.props.addRelease} />
				<ReleaseList
					releases={this.props.releases}
					removeRelease={this.props.removeRelease}
				/>
			</div>
		);
	}
}

AppContainer.propTypes = {
	releases: React.PropTypes.array.isRequired,
	addRelease: React.PropTypes.func.isRequired,
	removeRelease: React.PropTypes.func.isRequired,
};

function select(state) {
	return {
		releases: state.releases
	};
}

export default connect(
	select,
	{
		addRelease,
		removeRelease
	}
)(AppContainer);
