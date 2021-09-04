import React from 'react';
import './components.css';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about_wrapper">
      <img
        className="about_image"
        src="https://i.pinimg.com/originals/d6/95/67/d695675a0106b28412a16fdbcffdbaa7.jpg"
      />

      <div>
        <h3>
          Want to start learning a new skill, but not sure where to start and
          how? More precisely, do not have enthusiatic partners to learn and
          grow along?
        </h3>
        <h4>
          Are you bored about the abundant community based learning apps, and
          anxious about the fomo they create?
        </h4>
        <h2>Worry not!</h2>
        <h4>You have landed on the right place.</h4>
        <p>
          <strong>Studinder</strong> is an app for you to choose your partners
          according to YOUR abilities and YOUR learning goals. Just fill in your
          requirements for a perfect partner, and we will find a perfect match
          according to your interests and goals.
        </p>

        <h2>
          What are you waiting for then? Join in and find your best study
          partner.
        </h2>
        <button>
          <Link className="link" to="login">
            SignUp
          </Link>
        </button>
      </div>
    </div>
  );
}

export default About;
