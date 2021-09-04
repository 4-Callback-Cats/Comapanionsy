/* eslint-disable prettier/prettier */
import React from "react";
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const CardItem = (props) => {

  return (
     
    <Card style={{ width: '20rem', margin: '2rem'}}>
      
        <Card.Header>{props.name}</Card.Header>
        <Card.Body>
        <Card.Text>
          {props.text}
        </Card.Text>
        <Button variant="primary">Approach</Button>
      </Card.Body>
    </Card>

  );

}

export default CardItem;

