/* eslint-disable prettier/prettier */
import React from "react";
import { Card, Button, CardDeck } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const CardItem = (props) => {

  return (

    <Card style={{ width: '15rem', margin: '2rem' }}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
        <Button variant="primary">Approach</Button>
      </Card.Body>
    </Card>

  );

}

export default CardItem;

