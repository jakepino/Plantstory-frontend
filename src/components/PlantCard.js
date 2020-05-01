import React, { Component } from "react";
import PlantCardUserName from "../containers/PlantCardUsername";
import PlantCardUsername from "../containers/PlantCardUsername";

export default class PlantCard extends Component {
	render() {
		return (
			<div>
				<PlantCardUsername user={this.props.user} />
			</div>
			// <div PlantCard Username container/>
			// <div PlantCard Pictures container/>
			// <div PlantCard Details container/> // user uploaded info
		);
	}
}
