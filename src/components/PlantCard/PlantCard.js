import React, { Component } from "react";
import PlantCardUsername from "./PlantCardUsername";
import PlantCardPhotos from "./PlantCardPhotos";
import PlantCardDetails from "./PlantCardDetails";
import PlantCardComments from "./PlantCardComments";
import Card from "react-bootstrap/Card";
import NewCommentForm from "./NewCommentForm";
import Button from "react-bootstrap/Button"
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
  showForm = () => {
   
    if (this.props.showCommentForm === true) {
      return (
        <div>
          <form onSubmit={this.props.handleCommentSubmit} >
            <input
            onChange={this.props.handleCommentChange}
              type="text"
              name="comment"
              //   onChange={(event) => this.props.handleChange(event)}
              value={this.props.newComment}
            />
            <Button>Submit</Button>
          </form>
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  render() {
    let { user, posts, photos, plant } = this.props.userPost;

    return (
      <Card bg="light" style={{ width: "18rem" }}>
        <PlantCardUsername user={user} />

        {photos.map((photo) => (
          <PlantCardPhotos key={photo.id} image={photo.img} />
        ))}

        <PlantCardDetails
          plant={plant}
          user={user}
          post={posts}
          toggleNewComment={this.props.toggleNewComment}
        />
        <PlantCardComments />
        <NewCommentForm showForm={this.showForm} />
      </Card>
      // <div PlantCard Username container/>
      // <div PlantCard Pictures container/>
      // <div PlantCard Details container/> // user uploaded info
    );
  }
}
