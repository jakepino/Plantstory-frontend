import React from "react";
import Card from "react-bootstrap/Card"
import ToastHeader from "react-bootstrap/ToastHeader";

const PlantCardUsername = (props) => {
	let { username, profile_picture } = props.user;
	return (

		<ToastHeader closeButton={false}>
			<img src={profile_picture} style={{ height: 80 }} />
			<div>{username}</div>
		</ToastHeader>
	
	);
};

export default PlantCardUsername;
