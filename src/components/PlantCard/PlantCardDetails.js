import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Card from "react-bootstrap/Card";


const PlantCardDetails = (props) => {
  let { plant, post, user } = props;
  return (
    <Card.Body>
      <Card.Title>
        {user.username}'s {plant.common_name}
      </Card.Title>
      <Card.Body style={{padding:0}}>Latin Name: {plant.latin_name}</Card.Body>

      <Card.Body>{post.description}</Card.Body>

   <ButtonGroup style={{width:"100%"}}>
        <Button variant="success" style={{width:'50%'}} >Like </Button>
        <Button  variant="success" style={{width:'50%'}}>Comment</Button>
   </ButtonGroup>

    </Card.Body>
  );
};

export default PlantCardDetails;
