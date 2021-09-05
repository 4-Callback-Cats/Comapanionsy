import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import CardItem from './Card';
import { CardStyle } from '../styles/Card';
import { getAllProfiles } from '../../lib/database';

const Profile = async () => {
  const contacts = await getAllProfiles();
  console.log(contacts);

  return (
    <CardStyle>
      {contacts.map((person) => {
        return (
          <CardItem key={person.uid} name={person.name} text={person.bio} />
        );
      })}
    </CardStyle>
  );
};

export default Profile;
