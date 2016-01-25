import React from 'react';
import Release from './Release';

const ReleaseList = ({
	releases,
	removeRelease
}) => {
	return (
		<div>
			{releases.map(release => {
				return (
					<Release
						key={release.id}
						release={release}
						removeRelease={removeRelease}
					/>
				);
			})}
		</div>
	);
};

ReleaseList.propTypes = {
	releases: React.PropTypes.array.isRequired,
	removeRelease: React.PropTypes.func.isRequired
};

export default ReleaseList;
