import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logo } from '../styles/images';
import FormInput from './FormInput';
import Button from './Button';

const SignupForm = ({
  onChange,
  letterRef,
  capitalRef,
  numberRef,
  lengthRef,
  errorRef,
  onKeyUp,
  onBlur,
  onFocus,
  passwordToggle,
  passwordRef,
  signupHandler,
  confirmPasswordRef,
  comparePasswordRef,
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
              Ref={passwordRef}
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
              Ref={confirmPasswordRef}
              onKeyUp={comparePassword}
            />
            <div className="compare">
              <div
                ref={comparePasswordRef}
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
              <div id="errorMessage" ref={errorRef} className="errorMessage">
                <span className="notMember">Password must contain :</span>
                <h3 id="letter" ref={letterRef} className="invalid">
                  A
                  {' '}
                  <b>Lowercase</b>
                  {' '}
                  letter
                </h3>
                <h3 id="capital" ref={capitalRef} className="invalid">
                  A
                  {' '}
                  <b>Capital (uppercase)</b>
                  {' '}
                  letter
                </h3>
                <h3 id="number" ref={numberRef} className="invalid">
                  A
                  {' '}
                  <b>Number</b>
                </h3>
                <h3 id="length" ref={lengthRef} className="invalid">
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
  letterRef: PropTypes.objectOf(PropTypes.any).isRequired,
  comparePasswordRef: PropTypes.objectOf(PropTypes.any).isRequired,
  capitalRef: PropTypes.objectOf(PropTypes.any).isRequired,
  numberRef: PropTypes.objectOf(PropTypes.any).isRequired,
  lengthRef: PropTypes.objectOf(PropTypes.any).isRequired,
  passwordRef: PropTypes.objectOf(PropTypes.any).isRequired,
  confirmPasswordRef: PropTypes.objectOf(PropTypes.any).isRequired,
  errorRef: PropTypes.objectOf(PropTypes.any).isRequired,
  onKeyUp: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  passwordToggle: PropTypes.func.isRequired
};

export default SignupForm;
