import React from 'react';

function QuestionCard({ item }) {
  return (
    <div className="questionCardWrapper">
      <h4>{item.q}</h4>
      <h5>
        {item.options.map((option) => (
          <div key={option}>
            <input type="radio" value={option} />
            <label>{option}</label>
          </div>
        ))}
      </h5>
    </div>
  );
}

export default QuestionCard;
