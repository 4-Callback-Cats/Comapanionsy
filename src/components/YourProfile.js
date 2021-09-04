import React from 'react';
import questions from './questions.js';
import QuestionCard from './QuestionCard';

function YourProfile() {
  return (
    <>
      <h1>Let us get to know you first...</h1>
      <h3>
        We will ask a few questions, based on which you will find a matching
        study partner.
        <br />
        <br />
        Ready? Awesome!
      </h3>

      <div className="questions">
        {questions.map((item) => (
          <QuestionCard item={item} key={item.q} />
        ))}
      </div>
    </>
  );
}

export default YourProfile;
