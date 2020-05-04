import React from "react";

const PlantCardUsername = (props) => {
	let { username, profile_picture } = props.user;
	return (
		<div>
			<img src={profile_picture} style={{ height: 80 }} />
			<div>{username}</div>
		</div>
	);
};

export default PlantCardUsername;
