import React from "react";

const PlantCardPhotos = (props) => {

	{console.log(props)}
	return (
		<div>
			<img src={props.img} alt=''></img>
		</div>
	);
};

export default PlantCardPhotos;