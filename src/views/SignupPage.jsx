import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SignupForm, Footer } from '../components';
import { signupUser } from '../actions/signupActions';
import NavBar from './Navbar';
import toastMessage from '../utilities/toastMessage';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      count: '0'
    };
    this.letterRef = React.createRef();
    this.capitalRef = React.createRef();
    this.numberRef = React.createRef();
    this.lengthRef = React.createRef();
    this.errorRef = React.createRef();
    this.passwordRef = React.createRef();
    this.confirmPasswordRef = React.createRef();
    this.comparePasswordRef = React.createRef();
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
    }
    if (password !== confirmPassword) {
      return toastMessage({
        type: 'danger',
        message: 'Password Not Matching',
      });
    } return toastMessage({
      type: 'danger',
      message: 'Password Not Accepted. Please use a secured password',
    });
  }

comparePassword = () => {
  const { password, confirmPassword } = this.state;
  if (password === confirmPassword) {
    this.comparePasswordRef.current.style.display = 'block';
    this.comparePasswordRef.current.style.color = 'green';
    this.comparePasswordRef.current.innerHTML = 'Password Matching';
  } else {
    this.comparePasswordRef.current.innerHTML = 'Password not Matching';
    this.comparePasswordRef.current.style.display = 'block';
    this.comparePasswordRef.current.style.color = 'red';
  }
}

  validate = (value, attribute, check) => {
    if (value.match(check)) {
      attribute.classList.remove('invalid');
      attribute.classList.add('valid');
    } else {
      attribute.classList.remove('valid');
      attribute.classList.add('invalid');
    }
  }

  handleOnKeyUp = (e) => {
    let count = 0;
    const { value } = e.target;

    // Validate lowercase letters
    const lowerCase = /[a-z]/g;
    this.validate(value, this.letterRef.current, lowerCase, count += 1);

    // Validate capital letters
    const upperCase = /[A-Z]/g;
    this.validate(value, this.capitalRef.current, upperCase, count += 1);

    // Validate numbers
    const numbers = /[0-9]/g;
    this.validate(value, this.numberRef.current, numbers, count += 1);

    // Validate length
    if (value.length >= 8) {
      this.lengthRef.current.classList.remove('invalid');
      this.lengthRef.current.classList.add('valid');
      count += 1;
    } else {
      this.lengthRef.current.classList.remove('valid');
      this.lengthRef.current.classList.add('invalid');
    }
    if (count === 4) {
      this.setState({ count: 4 });
      this.errorRef.current.style.display = 'none';
    }
    this.comparePassword();
  }

handleOnBlur = () => {
  this.errorRef.current.style.display = 'none';
}

handleOnFocus = () => {
  this.errorRef.current.style.display = 'block';
}

viewPassword = () => {
  if (this.passwordRef.current.type === 'password') {
    this.passwordRef.current.type = 'text';
    this.confirmPasswordRef.current.type = 'text';
  } else {
    this.passwordRef.current.type = 'password';
    this.confirmPasswordRef.current.type = 'password';
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
        letterRef={this.letterRef}
        capitalRef={this.capitalRef}
        numberRef={this.numberRef}
        passwordRef={this.passwordRef}
        confirmPasswordRef={this.confirmPasswordRef}
        comparePasswordRef={this.comparePasswordRef}
        lengthRef={this.lengthRef}
        errorRef={this.errorRef}
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
