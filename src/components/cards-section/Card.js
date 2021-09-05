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
<<<<<<< HEAD
        <Button style={{ 
          alignItem: "center",  
          background: '#DC143C', 
=======
        <Button variant="danger" style={{ 
          alignItem: "center",   
>>>>>>> c80df8450408547464513873585d5e007c3b918d
          margin: '1rem', 
          border: '2px' ,
          }}>Approach</Button>
      </Card.Body>
    </Card>

  );

}

export default CardItem;

