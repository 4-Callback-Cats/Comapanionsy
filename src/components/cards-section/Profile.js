import React from 'react';
import { Container } from 'react-bootstrap';
import CardItem from './Card';
import contacts from './contacts';
import { CardStyle } from '../styles/Card';
const Profile = () => {
  return (
    <CardStyle>
      {contacts.map(({ name, text, id }) => {
        return <CardItem key={id} name={name} text={text} />;
      })}
    </CardStyle>
  );
};

export default Profile;
