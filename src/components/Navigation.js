import React from 'react';

import './components.css';

import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className="navigation_wrapper">
      <div className="hero">
        <h1>Studinder</h1>
      </div>

      <div className="nav_links">
        <ul>
          <li>
            <Link className="link" to="/">
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/profile">
              Your Profile
            </Link>
          </li>
          <li>
            <Link className="link" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
