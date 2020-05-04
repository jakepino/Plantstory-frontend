import React, { Component } from "react";
import PlantCardUsername from "./PlantCardUsername";
import PlantCardPhotos from "./PlantCardPhotos"
import PlantCardDetails from "./PlantCardDetails"
import PlantCardComments from "./PlantCardComments"

export default class PlantCard extends Component {
	
	render() {
		let {posts, photos, plant} = this.props.userPosts
		return (
			<div>
				<PlantCardUsername />
				{photos.forEach((photo) => <PlantCardPhotos img={photo.img}/>)}
				
				<PlantCardDetails />
				<PlantCardComments/>
			</div>
			// <div PlantCard Username container/>
			// <div PlantCard Pictures container/>
			// <div PlantCard Details container/> // user uploaded info
		);
	}
	
}
