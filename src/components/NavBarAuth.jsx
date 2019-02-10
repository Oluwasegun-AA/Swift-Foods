import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logo, cart, avarter } from '../styles/images';

const NavBarAuth = ({ signOut, cartWeight }) => (
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
        <div className="dropdown dropdown-avarter">
          <img src={avarter} className="avarter" alt="user-avatar" />
          <div className="dropdown-content">
            <Link className="sign out" to="/" onClick={signOut}>Signout</Link>
            <Link className="menu" to="/menu">Menu</Link>
            <Link className="contact" to="/contact">Contact</Link>
          </div>
        </div>
        <div className="dropdown dropdown-account">
          <span className="dropbtn">My Account</span>
          <div className="dropdown-content">
            <Link to="/active/orders">Active Orders</Link>
            <Link to="/order/history">Order History</Link>
            <Link to="/support">Support</Link>
          </div>
        </div>
        <Link id="cart" className="cart" to="/cart">
          <span className="cartName">cart</span>
          <div className="cartImageAndWeight">
            <img src={cart} className="cartImage" />
            <span className="cartWeight">{cartWeight}</span>
          </div>
        </Link>
        <Link id="menu" className="menu" to="/menu"><span>Menu</span></Link>
      </div>
    </div>
  </nav>
);

NavBarAuth.propTypes = {
  signOut: PropTypes.func.isRequired,
  cartWeight: PropTypes.number.isRequired
};

export default NavBarAuth;
