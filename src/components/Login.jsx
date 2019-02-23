
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logo } from '../styles/images';
import FormInput from './FormInput';
import Button from './Button';

const Login = ({
  onChange,
  loginHandler,
  onKeyUp,
  onBlur,
  onFocus,
  passwordToggle,
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
              name="username"
              className="username"
              placeHolder="Enter Username"
              onChange={onChange}
              onKeyUp={onKeyUp}
            />
            <span><b>Password</b></span>
            <FormInput
              type="password"
              id="password"
              name="password"
              className="password"
              placeHolder="Enter Password"
              onChange={onChange}
              onKeyUp={onKeyUp}
              onBlur={onBlur}
              onFocus={onFocus}
            />
            <span className="showPassword">
              <input
                type="checkbox"
                id="showPassword"
                className="showPassword"
                name="remember"
                onClick={passwordToggle}
              />
              <span>Show Password</span>
            </span>
            <div className="loginButtonDiv">
              <Button className="loginBtn" value="Login" onClick={loginHandler} />
            </div>
            <div className="errorMessageContainer">
              <span id="notMember">
                <span>Not a member?   </span>
                <Link to="/signup"> Signup</Link>
              </span>
              <div id="errorMessage" className="errorMessage">
                <span className="erroMessageTitle">Password must contain :</span>
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
  onChange: PropTypes.func.isRequired,
  loginHandler: PropTypes.func.isRequired,
  onKeyUp: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  passwordToggle: PropTypes.func.isRequired
};

export default Login;
