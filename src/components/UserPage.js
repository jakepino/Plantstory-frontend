import React, { Component } from "react";
import PlantCard from "./PlantCard/PlantCard";

const BaseURL = "http://localhost:3000/"; // CHANGE FOR JOEY

const UserURL = `${BaseURL}users/13`; // USER HARDCODE
const PostURL = `${BaseURL}posts`;
const PlantURL = `${BaseURL}plants`;
const PhotoURL = `${BaseURL}photos`;
const CommentsURL = `${BaseURL}comments`;

export default class MainPage extends Component {
	state = {
		user: {},
		posts: [],
		photos: [],
		comments: [],
		plants: [],
		// usersPosts: [],
		userPosts: {
			user: {},
			posts: [],
			plant: {},
			photos: [],
			comments: [],
		},
	};

	// fetchUser = () => {
	// 	return fetch(UserURL)
	// 		.then((resp) => resp.json())
	// 		.then((fetchedUser) => {
	// 			this.setState({
	// 				user: fetchedUser,
	// 			});
	// 		});
	// };
	// fetchComments = () => {
	// 	return fetch(CommentsURL)
	// 		.then((resp) => resp.json())
	// 		.then((fetchedComments) => {
	// 			this.setState({
	// 				comments: fetchedComments,
	// 			});
	// 		});
	// };
	// fetchPosts = () => {
	// 	return fetch(PostURL)
	// 		.then((resp) => resp.json())
	// 		.then((fetchedPosts) => {
	// 			this.setState({
	// 				posts: fetchedPosts,
	// 			});
	// 		});
	// };
	// fetchPhotos = () => {
	// 	return fetch(PhotoURL)
	// 		.then((resp) => resp.json())
	// 		.then((fetchedPhoto) => {
	// 			this.setState({
	// 				photos: fetchedPhoto,
	// 			});
	// 		});
	// };
	// fetchPlants = () => {
	// 	return fetch(PlantURL)
	// 		.then((resp) => resp.json())
	// 		.then((fetchedPlants) => {
	// 			this.setState({
	// 				plants: fetchedPlants,
	// 			});
	// 		});
	// };

	componentDidMount() {
		Promise.all([
			fetch(UserURL).then((res) => res.json()),
			fetch(PostURL).then((res) => res.json()),
			fetch(PlantURL).then((res) => res.json()),
			fetch(PhotoURL).then((res) => res.json()),
		]).then(([user, posts, plants, photos]) =>
			this.setState({ user, posts, plants, photos }, () =>
				this.findUsersPosts()
			)
		);
	}

	render() {
		return (
			<div>
				<PlantCard userPost={this.state.userPosts} />
			</div>
		);
	}

	findUsersPosts = () => {
		this.state.posts.forEach((post) => {
			if (
				!this.state.userPosts.posts.includes(post) &&
				post.user_id === this.state.user.id
			) {
				const newPlant = this.state.plants.find(
					(plant) => plant.id === post.plant_id
				);
				const newPhotos = this.state.photos.filter(
					(photo) => photo.post_id === post.id
				);
				this.setState({
					userPosts: {
						user: this.state.user,
						posts: post,
						plant: newPlant,
						photos: newPhotos,
					},
				});
			}
		});
	};
}
