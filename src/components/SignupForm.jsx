import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SubmitButton from './SubmitButton';
import TextFieldGroup from './TextFieldGroup';
import FlashMessageList from './FlashMessagesList';

const SignupForm = ({
  onChange,
  errors,
  onBlur,
  onInput,
  username,
  password,
  email,
  isRequestSent,
  confirmPassword,
  submitDetails,
}) => (
  <div className="signup-container">
    <div className="signup-row">
      <div className="sign-up.col1" id="welcome-container">
        <div id="welcome-text-container" className="text-center">
          <h2>Writing is an art.</h2>
          <h3>Explore your creative side at Authors Haven.</h3>
        </div>
        <span id="signup-image" />
      </div>
      <div className="signup.col2">
        <div id="form-container">

          <FlashMessageList
            customAlertClass="signup-custom-alert"
          />

          <form className="form-horizontal" autoComplete="off">
            <TextFieldGroup
              id="username"
              error={errors && errors.username}
              placeholder="Username"
              field="username"
              value={username}
              onChange={onChange}
              onBlur={onBlur}
              errorFeedbackClass="signup-invalid-feedback"
              validFeedbackClass="signup-valid-feedback"
              className="form-control signup-form-input"
              customFormDivClass="signup-div-class"
              onInput={onInput}
            />

            <TextFieldGroup
              id="email"
              error={errors && errors.email}
              placeholder="Email"
              field="email"
              value={email}
              onChange={onChange}
              onBlur={onBlur}
              errorFeedbackClass="signup-invalid-feedback"
              validFeedbackClass="signup-valid-feedback"
              className="form-control signup-form-input"
              customFormDivClass="signup-div-class"
              onInput={onInput}
            />

            <TextFieldGroup
              id="password"
              error={errors && errors.password}
              placeholder="Password"
              field="password"
              value={password}
              onChange={onChange}
              onBlur={onBlur}
              errorFeedbackClass="signup-invalid-feedback"
              validFeedbackClass="signup-valid-feedback"
              className="form-control signup-form-input"
              customFormDivClass="signup-div-class"
              type="password"
              onInput={onInput}
            />

            <TextFieldGroup
              id="confirmPassword"
              error={errors && errors.confirmPassword}
              placeholder="Confirm Password"
              field="confirmPassword"
              value={confirmPassword}
              onChange={onChange}
              onBlur={onBlur}
              errorFeedbackClass="signup-invalid-feedback"
              validFeedbackClass="signup-valid-feedback"
              className="form-control signup-form-input"
              customFormDivClass="signup-div-class"
              onInput={onInput}
              type="password"
            />

            <div className="row signup-button-container">
              <SubmitButton
                onClick={submitDetails}
                isRequestSent={isRequestSent}
                id="signup-page-button"
                value="Signup"
                className="btn"
                columnAttribute=""
              />
            </div>

            <Link to="/login" className="login-link-container">
              <div className="login-link">Registered? Login instead</div>
            </Link>

          </form>
        </div>
      </div>
    </div>
  </div>
);

SignupForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  errors: PropTypes.oneOfType([
    PropTypes.string, PropTypes.objectOf(PropTypes.string)]).isRequired,
  password: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  submitDetails: PropTypes.func.isRequired,
  isRequestSent: PropTypes.bool.isRequired,
  onInput: PropTypes.func,
  onBlur: PropTypes.func
};

SignupForm.defaultProps = {
  onInput: () => null,
  onBlur: () => null
};

export default SignupForm;
