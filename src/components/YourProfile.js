import React from 'react';
import QuestionCard from './QuestionCard';

function YourProfile() {
  return (
    <div className="m-3">
      <h1>Let us get to know you first...</h1>
      <h3>
        We will ask a few questions, based on which you will find a matching
        study partner.
        <br />
        <br />
        Ready? Awesome!
      </h3>

      <div className="questions">
        <QuestionCard />
      </div>
    </div>
  );
}

export default YourProfile;
