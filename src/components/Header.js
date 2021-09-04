/* eslint-disable prettier/prettier */
import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';




import './components.css';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Studinder</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></Nav.Link>
      <Nav.Link><Link to="/login" style={{ textDecoration: 'none' }}>Login</Link></Nav.Link>
      <Nav.Link><Link to="/meet-people" style={{ textDecoration: 'none' }}>Meet People</Link></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  );
}

export default Header;
