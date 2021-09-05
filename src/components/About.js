/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
import React from 'react';
import './components.css';
import { Link } from 'react-router-dom';
import { Sections } from './styles/Sections';
import { Button, Container, Col } from 'react-bootstrap';

function About() {
  function Worry() {
    alert("DON'T WORRY FOR REAL LOL");
  }
  return (
    <>
      <Container fluid className="hero-section">
        <Col className="content-cont">
          <h1 className="hero-title">
            Want to start learning a new skill, but not sure where to start?
          </h1>

          <p className="hero-description">
            Are you bored about the abundant community based learning apps, and
            anxious about the fomo they create?
          </p>
          <Button className="startbtn">
            <Link id="loginbtnlink" to="/login">
              Sign up
            </Link>
          </Button>
        </Col>
        <Col className="img-cont">
          <img src="./heroimg.svg" alt="" />
        </Col>
      </Container>
      <Container className="studytogether">
        <Col>
          <img id="together" src="./studytogther.svg" alt="" />
        </Col>
        <Col className="section-two-cont">
          <h2>Study together and Grow along</h2>
          <p>
            choose your partners according to YOUR abilities and YOUR learning
            goals.Just fill in your requirements for a perfect partner, and we
            will find a perfect match according to your interests and goals.
          </p>
        </Col>
      </Container>
      <Container className="resource-cont">
        
        <Col className="section-three-cont">
          <h2>Don't worry we'll provide you<br/>the best resource availabe on the web</h2>
          <p>
            you'll get 100% free and best course by top faculties and reviewed by lakhs of students around the globe, with a perfect roadmap of your goal.
          </p>
        </Col>
        <Col>
          <img id="resourceimg" src="./resource.svg" alt="" />
        </Col>
      </Container>

    </>
  );
}

export default About;
