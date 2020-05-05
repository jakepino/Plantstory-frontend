import React from "react";
import Card from "react-bootstrap/Card"

const PlantCardPhotos = (props) => {
	return (
		<>
			<Card.Img variant="top" src={props.image} alt=""></Card.Img>
		</>
	);
};

export default PlantCardPhotos;
