import React, { Component } from 'react';
import autobind from 'autobind-decorator';

@autobind
class Release extends Component {

	constructor(props) {
		super(props);

		this.state = {};
	}

	handleRemove() {
		const payload = {
			id: this.props.release.id
		};
		this.props.removeRelease(payload);
	}

	render() {
		return (
			<div
				key={this.props.release.id}
			>
				<div>
					"{this.props.release.release}"
				</div>
				<div>
					<div>
						{this.props.release.artist}
					</div>
				</div>
				<div>
					<button
						onClick={this.handleRemove}
					>
						Remove Release
					</button>
				</div>
			</div>
		);
	}
}

Release.propTypes = {
	release: React.PropTypes.object.isRequired,
	removeRelease: React.PropTypes.func.isRequired
};

export default Release;
