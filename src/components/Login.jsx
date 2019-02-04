
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logo } from '../styles/images';
import FormInput from './FormInput';
import Button from './Button';

const Login = ({
  username,
  password,
  login
}) => (
  <div className="gridContainer">
    <div className="gridTop" />
    <div className="gridRight" />
    <div className="gridMiddle">
      <div className="login-container">
        <form className="login-section">
          <div className="login-image">
            <img src={logo} alt="logo" className="login-logo" />
          </div>
          <div className="loginParticulars">
            <span><b>Username</b></span>
            <FormInput
              type="text"
              id="username"
              className="username"
              placeHolder="Enter Username"
              onchange={username}
            />
            <span><b>Password</b></span>
            <FormInput
              type="password"
              id="password"
              className="password"
              placeHolder="Enter Password"
              onchange={password}
            />
            <span className="showPassword">
              <input
                type="checkbox"
                id="showPassword"
                className="showPassword"
                name="remember"
              />
              <span>Show Password</span>
            </span>
            <div className="signupButtonDiv">
              <Button className="loginBtn" value="Login" onClick={login} />
            </div>
            <div className="errorMessageContainer">
              <span id="notMember">
                <span>Not a member?   </span>
                <Link to="/signup"> Signup</Link>
              </span>
              <div id="errorMessage" className="errorMessage">
                <span className="notMember">Password must contain :</span>
                <h3 id="letter" className="invalid">
                  A
                  {' '}
                  <b>Lowercase</b>
                  {' '}
                  letter
                </h3>
                <h3 id="capital" className="invalid">
                  A
                  {' '}
                  <b>Capital (uppercase)</b>
                  {' '}
                  letter
                </h3>
                <h3 id="number" className="invalid">
                  A
                  {' '}
                  <b>Number</b>
                </h3>
                <h3 id="length" className="invalid">
                  At least
                  <b> 8 characters</b>
                </h3>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div className="gridLeft" />
    <div className="gridBottom" />
  </div>
);

Login.propTypes = {
  username: PropTypes.func.isRequired,
  password: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired
};

export default Login;
