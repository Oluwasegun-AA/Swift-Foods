import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logo } from '../styles/images';
import FormInput from './FormInput';
import Button from './Button';

const SignupForm = ({
  username,
  email,
  password,
  confirmPassword,
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
            <span id="emailLabel"><b>Email Address</b></span>
            <FormInput
              type="text"
              id="email"
              className="email"
              placeHolder="Enter Email Address"
              onchange={email}
            />
            <span><b>Password</b></span>
            <FormInput
              type="password"
              id="password"
              className="password"
              placeHolder="Enter Password"
              onchange={password}
            />
            <span><b>Confirm Password</b></span>
            <FormInput
              type="password"
              id="password"
              className="password"
              placeHolder="Enter Password"
              onchange={confirmPassword}
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
              <Button className="loginBtn" value="Signup" onClick={login} />
            </div>
            <div className="errorMessageContainer">
              <span id="notMember">
                <span>Already a member?   </span>
                <Link to="/login"> Login</Link>
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

SignupForm.propTypes = {
  username: PropTypes.func.isRequired,
  email: PropTypes.func.isRequired,
  password: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  confirmPassword: PropTypes.func.isRequired
};

export default SignupForm;
