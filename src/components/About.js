/* eslint-disable prettier/prettier */
import React from 'react';
import './components.css';
import { Link } from 'react-router-dom';
import {Sections} from "./styles/Sections";
import Button from "react-bootstrap/Button"

function About() {
  return (
    <Sections>
    <div className="about_wrapper">
      <center>
      <iframe src="https://giphy.com/embed/SabSYEpsVh0di" width="480" height="206" frameBorder="0"allowFullScreen></iframe><p><a href="https://giphy.com/gifs/thinking-SabSYEpsVh0di"></a></p>
      </center>
    

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
         <center>
         <Link className="link" to="login">
          <Button size="lg" style={{alignItem:"center"}}variant="success">SignUp</Button>
          </Link>
         </center>
        
       
      </div>
    </div>
    </Sections>
  );
}

export default About;
