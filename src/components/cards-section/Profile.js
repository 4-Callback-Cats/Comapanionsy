import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import CardItem from './Card';
import { CardStyle } from '../styles/Card';
import { getAllProfiles } from '../../lib/database';
import { Button } from 'react-bootstrap';

const Profile = () => {
  const [contacts, setContacts] = useState();
  return (
    <>
      {!contacts ? (
        <div className="mx-auto text-center my-5">
          <Button
            onClick={() => {
              getAllProfiles().then((a) => setContacts(a));
            }}
          >
            Meet new people!
          </Button>
        </div>
      ) : (
        <CardStyle>
          {contacts.map((person) => {
            return (
              <CardItem key={person.uid} name={person.name} text={person.bio} gender={person.gender} domain={person.domain} image={person.photoUrl} bio={person.bio} />
            );
          })}
        </CardStyle>
      )}
    </>
  );
};

export default Profile;
