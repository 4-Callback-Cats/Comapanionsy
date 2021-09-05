/* eslint-disable prettier/prettier */
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const CardItem = (props) => {
  return (
    <Card
      style={{ width: '20rem', margin: '2rem', border: '2px solid #2b2727' }}
    >
      <Card.Header>{props.name}</Card.Header>
      <Card.Body>

        <center><img src={props.image} alt="profile-pic" style={{ borderRadius: "50%", display: "flex", alignItems: "center", margin: "1rem 1rem" }} /></center>

        <strong><Card.Text>{props.domain}</Card.Text></strong>
        <Card.Text>{props.gender}</Card.Text>
        <Card.Text>{props.bio}</Card.Text>
    
        <Button
          style={{
            alignItem: 'center',
            background: '#DC143C',
            margin: '1rem',
            border: '2px',
          }}
        >
          Approach
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardItem;
