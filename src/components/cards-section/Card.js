/* eslint-disable prettier/prettier */
import React from "react";
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const CardItem = (props) => {

  return (

    <Card style={{ width: '20rem', margin: '2rem', border: '2px solid #2b2727' }}>

      <Card.Header>{props.name}</Card.Header>
      <Card.Body>
        <Card.Text>
          {props.text}
        </Card.Text>
        <Button style={{ 
          alignItem: "center",  
          background: '#DC143C', 
          margin: '1rem', 
          border: '2px' ,
          }}>Approach</Button>
      </Card.Body>
    </Card>

  );

}

export default CardItem;

