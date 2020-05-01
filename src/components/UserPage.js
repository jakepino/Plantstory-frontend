import React, { Component } from "react";
import PlantCard from "./PlantCard";

const UserURL = "http://localhost:3000/users/5";

export default class MainPage extends Component {
	state = {
		user: [],
	};

	componentDidMount() {
		fetch(UserURL)
			.then((resp) => resp.json())
			.then((fetchedUser) => {
				this.setState({
					user: fetchedUser,
				});
			});
	}
	render() {
		return (
			<div>
				<PlantCard user={this.state.user} />
			</div>
		);
	}
}
