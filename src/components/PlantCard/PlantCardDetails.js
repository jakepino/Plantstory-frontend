import React from "react";

const PlantCardDetails = (props) => {
	let { plant, post, user } = props;
	return (
		<div>
			<h2>
				{user.username}'s {plant.common_name}
			</h2>
			<h4>Latin Name: {plant.latin_name}</h4>

			<p>{post.description}</p>

			<div>
				<button>Like </button>
				<button>Comment</button>
			</div>
		</div>
	);
};

export default PlantCardDetails;
