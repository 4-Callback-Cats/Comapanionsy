/* eslint-disable prettier/prettier */
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

import './components.css';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar id="nav-bar">
      <Container>
        <Navbar.Brand style={{fontWeight: 'bold', color: 'white', border: '2px solid white', padding: '5px'}} href="#home">Comapanionsy</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/login" style={{ textDecoration: 'none', color: 'white'}}>
              Login
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/profile" style={{ textDecoration: 'none', color: 'white' }}>
              Profile
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/meet-people" style={{ textDecoration: 'none', color: 'white' }}>
              Find Mate
            </Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
