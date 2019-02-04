import React from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../styles/images';

const NavBarNoAuth = () => (
  <nav className="navBar">
    <div className="headerContent">
      <span className="logo">
        <Link to="/">
          <img src={logo} className="headerLogo" />
        </Link>
      </span>

      <div className="blink-caption">
        <p className="text">
           Great Taste
          {' '}
          <span className="blin blink">Always</span>
        </p>
      </div>

      <div className="navigation">
        <Link className="signup" to="/signup">Signup</Link>
        <Link className="login" to="/login">Login</Link>
      </div>
    </div>
  </nav>
);

export default NavBarNoAuth;
