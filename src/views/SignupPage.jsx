import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SignupForm, Footer } from '../components';
import { signupUser } from '../actions/signupActions';
import NavBar from './Navbar';
import toastMessage from '../utilities/toastMessage';

export class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      count: 0
    };
  }

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleOnSubmit = async () => {
    const {
      password,
      confirmPassword,
      count
    } = this.state;
    const { userSignup, history } = this.props;
    if ((password === confirmPassword) && (count === 4)) {
      const response = await userSignup(this.state);
      if (response.success === true) {
        history.push('/login');
        return toastMessage({
          type: 'success',
          message: 'Signup successful. Please Login',
        });
      }
      return toastMessage({
        type: 'danger',
        message: 'Please check your internet connection',
      });
    // eslint-disable-next-line no-else-return
    } else if (password !== confirmPassword) {
      return toastMessage({
        type: 'danger',
        message: 'Password Not Matching',
      });
    } return toastMessage({
      type: 'danger',
      message: 'Password Not Accepted. Please use a secured password',
    });
  }


validate = (value, attribute, check) => {
  if (value.match(check)) {
    attribute.className = 'valid';
  } else {
    attribute.className = 'invalid';
  }
}

  handleOnKeyUp = (e) => {
    const error = e.currentTarget.parentElement.parentElement.children[11].children[1];
    const letter = e.currentTarget.parentElement.parentElement.children[11].children[1].children[1];
    const capital = e.currentTarget.parentElement.parentElement.children[11].children[1].children[2];
    const number = e.currentTarget.parentElement.parentElement.children[11].children[1].children[3];
    const length = e.currentTarget.parentElement.parentElement.children[11].children[1].children[4];
    let count = 0;
    const { value } = e.target;

    // Validate lowercase letters
    const lowerCase = /[a-z]/g;
    this.validate(value, letter, lowerCase, count += 1);

    // Validate capital letters
    const upperCase = /[A-Z]/g;
    this.validate(value, capital, upperCase, count += 1);

    // Validate numbers
    const numbers = /[0-9]/g;
    this.validate(value, number, numbers, count += 1);

    // Validate length
    if (value.length >= 8) {
      length.className = 'valid';
      count += 1;
    } else {
      length.className = 'invalid';
    }
    if (count === 4) {
      this.setState({ count: 4 });
      error.style.display = 'none';
    }
  }

  handleOnBlur = (e) => {
    const element = e.currentTarget.parentElement.parentElement;
    element.children[11].children[1].style.display = 'none';
  }

handleOnFocus = (e) => {
  const element = e.currentTarget.parentElement.parentElement;
  element.children[11].children[1].style.display = 'block';
}

viewPassword = (e) => {
  const element = e.currentTarget.parentElement.parentElement;
  if (element.children[5].children[0].type === 'password') {
    element.children[5].children[0].type = 'text';
    element.children[7].children[0].type = 'text';
  } else {
    element.children[5].children[0].type = 'password';
    element.children[7].children[0].type = 'password';
  }
}

render() {
  return (
    <span>
      <NavBar />
      <SignupForm
        {...this.state}
        signupHandler={this.handleOnSubmit}
        onChange={this.handleOnChange}
        onKeyUp={this.handleOnKeyUp}
        onBlur={this.handleOnBlur}
        onFocus={this.handleOnFocus}
        passwordToggle={this.viewPassword}
        comparePassword={this.comparePassword}
      />
      <Footer />
    </span>
  );
}
}

SignupPage.propTypes = {
  userSignup: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.object, PropTypes.func, PropTypes.string,
    PropTypes.number
  ])),
};

const mapDispatchToProps = {
  userSignup: signupUser
};

export default connect(null, mapDispatchToProps)(SignupPage);
