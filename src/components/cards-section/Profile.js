/* eslint-disable prettier/prettier */
import React from "react";
import { Container } from 'react-bootstrap';
import CardItem from "./Card";
import contacts from "../contacts";
const Profile = () => {
  return (
    <Container className="main-profile-cont">
      {contacts.map(({ name, text }) => {
        return (
          <CardItem name={name} text={text} />);
      })}
    </Container>
  );

}

export default Profile;
