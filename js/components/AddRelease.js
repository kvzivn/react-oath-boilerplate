import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import createId from '../utilities/createId';

@autobind
class AddRelease extends Component {

	handleSubmit() {
		const releaseNode = this.refs.release;
		const release = releaseNode.value.trim();
		const artistNode = this.refs.artist;
		const artist = artistNode.value.trim();
		const payload = {
			release,
			artist,
			id: createId(Date.now(), release),
		};
		this.props.addRelease(payload);
		releaseNode.value = '';
		artistNode.value = '';
	}

	render() {
		return (
			<div>
				<input
					type="text"
					ref="release"
					placeholder="Release Name"
				>
				</input>

				<input
					type="text"
					ref="artist"
					placeholder="Artist"
				>
				</input>

				<button
					onClick={this.handleSubmit}
				>
					Add Release
				</button>
			</div>
		);
	}
}

AddRelease.propTypes = {
	addRelease: React.PropTypes.func.isRequired
};

export default AddRelease;
