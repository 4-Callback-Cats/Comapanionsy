/* eslint-disable prettier/prettier */
import React from 'react';
import './components.css';
import { Link } from 'react-router-dom';
import { Sections } from "./styles/Sections";
import Button from "react-bootstrap/Button"

function About() {
  function Worry(){
    alert("DON'T WORRY FOR REAL LOL");
  }
  return (
    <Sections>
      <div className="about_wrapper">
      
        <center>
        <h2>Presenting <strong style={{color:"red"}}>S</strong><strong style={{color:"blue"}}>tudinder</strong></h2>
          <iframe src="https://giphy.com/embed/SabSYEpsVh0di" width="480" height="206" frameBorder="0" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/thinking-SabSYEpsVh0di"></a></p>
        </center>

        
        <div>
          <h3>
            Want to start learning a new skill, but not sure where to start and
            how? More precisely, do not have enthusiatic partners to learn and
            grow along?
          </h3>
          <hr />
          <h3>
            Are you bored about the abundant community based learning apps, and
            anxious about the fomo they create?
          </h3>
          <hr />
          <center> <Button variant="danger" size="lg" onClick={Worry}>Worry Not!!!</Button></center>
          

          <hr />
          <h3>You have landed on the right place.</h3>
          <h4>
            <strong style={{ color: "blue" }}>Studinder</strong> is an app for you to choose your partners
            according to YOUR abilities and YOUR learning goals.Just fill in your
            requirements for a perfect partner, and we will find a perfect match
            according to your interests and goals.
          </h4>
          <hr />
          <h3>
            What are you waiting for then?Join in and find your best study
            partner.
          </h3>

          <center>
            <section id="home">
            <Link className="link" to="login">
            <Button size="lg" style={{ alignItem: "center",  background: '#ff5632', margin: '1rem', border: 'none' }}>
            <Link to="/login" style={{ textDecoration: 'none',color: "white" }}>SignUp</Link>
            </Button>
            </Link>
            </section>
          </center>
        

      </div>
    </div>
    </Sections >
    
  );
}

export default About;
