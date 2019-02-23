import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logo } from '../styles/images';
import FormInput from './FormInput';
import Button from './Button';

const SignupForm = ({
  onChange,
  onKeyUp,
  onBlur,
  onFocus,
  passwordToggle,
  signupHandler,
  comparePassword
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
              onChange={onChange}
              onKeyUp={onKeyUp}
              name="username"
            />
            <span id="emailLabel"><b>Email Address</b></span>
            <FormInput
              type="text"
              id="email"
              className="email"
              placeHolder="Enter Email Address"
              onChange={onChange}
              onKeyUp={onKeyUp}
              name="email"
            />
            <span><b>Password</b></span>
            <FormInput
              type="password"
              id="password"
              className="password"
              placeHolder="Enter Password"
              onChange={onChange}
              onKeyUp={onKeyUp}
              onBlur={onBlur}
              onFocus={onFocus}
              name="password"
            />
            <span><b>Confirm Password</b></span>
            <FormInput
              type="password"
              id="confirmPassword"
              className="password"
              placeHolder="Enter Password"
              onChange={onChange}
              name="confirmPassword"
              onKeyUp={comparePassword}
            />
            <div className="compare">
              <div
                className="comparePassword"
              />
            </div>
            <span className="showPassword">
              <input
                type="checkbox"
                id="showPassword"
                className="showPassword"
                name="remember"
                onClick={passwordToggle}
                onChange={onChange}
              />
              <span>Show Password</span>
            </span>
            <div className="signupButtonDiv">
              <Button className="loginBtn" value="Signup" onClick={signupHandler} />
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
  onChange: PropTypes.func.isRequired,
  comparePassword: PropTypes.func.isRequired,
  signupHandler: PropTypes.func.isRequired,
  onKeyUp: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  passwordToggle: PropTypes.func.isRequired
};

SignupForm.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  comparePassword: () => ''
};

export default SignupForm;
