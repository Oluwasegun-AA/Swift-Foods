import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TextFieldGroup from './TextFieldGroup';
import FlashMessageList from './FlashMessagesList';
import SubmitButton from './SubmitButton';


const LoginForm = ({
  onChange,
  onBlur,
  onInput,
  errors,
  isRequestSent,
  submitDetails,
  email,
  password
}) => (
  <div className="login">
    <div className="login-row">
      <div className="login.col1">
        <span className="login-image-container" />
      </div>
      <div className="login.col2">
        <h3>WELCOME BACK.....</h3>
        <h5>LOGIN TO AUTHOR`S HAVEN</h5>

        <FlashMessageList
          customAlertClass="login-custom-alert"
        />

        <form autoComplete="off">
          <TextFieldGroup
            error={errors && errors.email}
            placeholder="Email"
            field="email"
            value={email}
            onChange={onChange}
            onBlur={onBlur}
            errorFeedbackClass="login-invalid-feedback"
            validFeedbackClass="login-valid-feedback"
            onInput={onInput}
            customFormDivClass="login-div-class"
            className="form-control login-input"
          />
          <TextFieldGroup
            error={errors && errors.password}
            placeholder="Password"
            field="password"
            type="password"
            value={password}
            onChange={onChange}
            onBlur={onBlur}
            errorFeedbackClass="login-invalid-feedback"
            validFeedbackClass="login-valid-feedback"
            onInput={onInput}
            customFormDivClass="login-div-class"
            className="form-control login-input"
          />
          <div className="forgot-password">
            <Link to="/reset-password"><p>FORGOT PASSWORD?</p></Link>
          </div>
          <div className="login-buttons">
            <SubmitButton
              onClick={submitDetails}
              isRequestSent={isRequestSent}
              className="login-btn"
              value="LOGIN"
              columnAttribute="login-col"
            />
          </div>

          <Link to="/signup" className="signup-link-container">
            <div className="signup-link">Unregistered? Sign up here</div>
          </Link>
        </form>
      </div>
    </div>
  </div>
);

LoginForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onInput: PropTypes.func,
  onBlur: PropTypes.func,
  errors: PropTypes.oneOfType([
    PropTypes.string, PropTypes.objectOf(PropTypes.string)]).isRequired,
  submitDetails: PropTypes.func.isRequired,
  isRequestSent: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

LoginForm.defaultProps = {
  onInput: () => null,
  onBlur: () => null
};


export default LoginForm;
