import React, { Component } from "react";
import PlantCardUsername from "./PlantCardUsername";
import PlantCardPhotos from "./PlantCardPhotos";
import PlantCardDetails from "./PlantCardDetails";
import PlantCardComments from "./PlantCardComments";

export default class PlantCard extends Component {
	// renderPhotos = () => {
	// 	if (this.props.userPosts.photos.length > 0) {
	// 		return this.props.userPosts.photos.map((photo) => (
	// 			<PlantCardPhotos key={photo.id} image={photo.img} />
	// 		));
	// 	} else {
	// 		console.log("no photos");
	// 	}
	// };
	// POSSIBLY NEED ABOVE
	render() {
		let { user, posts, photos, plant } = this.props.userPost;

		return (
			<div>
				<PlantCardUsername user={user} />

				{photos.map((photo) => (
					<PlantCardPhotos key={photo.id} image={photo.img} />
				))}

				<PlantCardDetails plant={plant} user={user} post={posts} />
				<PlantCardComments />
			</div>
			// <div PlantCard Username container/>
			// <div PlantCard Pictures container/>
			// <div PlantCard Details container/> // user uploaded info
		);
	}
}
