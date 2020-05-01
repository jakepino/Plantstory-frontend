import React from "react";

const PlantCardUsername = (props) => {
	let { username, profile_picture, bio } = props.user;
	console.log(props.user);
	console.log(props.user.profile_picture);
	return (
		<div>
			<div>{username}</div>
			<img src={profile_picture} />
			<p>{bio}</p>
		</div>
	);
};

export default PlantCardUsername;
