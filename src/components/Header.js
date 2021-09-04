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
      <Nav.Link><Link to="/Home" style={{ textDecoration: 'none' }}>Home</Link></Nav.Link>
      <Nav.Link to="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  );
}

export default Header;
