import React, { Component } from "react";
import PlantCard from "./PlantCard/PlantCard";
import Container from "react-bootstrap/Container";

const BaseURL = "http://localhost:3001/"; // CHANGE FOR JOEY

const UserURL = `${BaseURL}users/11`; // USER HARDCODE
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
    showCommentForm: false,
    newComment: "",
  };

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
      <Container>
        <PlantCard
          showCommentForm={this.state.showCommentForm}
          toggleNewComment={this.toggleNewComment}
          userPost={this.state.userPosts}
          handleCommentChange={this.handleCommentChange}
		  newComment={this.state.newComment}
		  handleCommentSubmit={this.handleCommentSubmit}
        />
      </Container>
    );
  }

  handleCommentSubmit = (e) => {
	  
	  console.log(e.target.value)
	e.preventDefault();
    const submittedComment = e.target.value;
    fetch(CommentsURL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(submittedComment),
	})
	.then(res => res.json)
	.then((comment) => {
		this.setState((previousState) => ({
			comments: [...previousState.comments, comment],
			newComment: ''
		}))
	})
  };

  handleCommentChange = (e) => {
    this.setState({
      newComment: e.target.value,
    });
  };

  toggleNewComment = () => {
    this.setState({ showCommentForm: !this.state.showCommentForm });
  };

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
