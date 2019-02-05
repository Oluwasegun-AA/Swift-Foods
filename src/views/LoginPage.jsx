import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginRequest, auth } from '../actions/loginActions';
import { Login, Footer } from '../components';
import NavBar from './Navbar';
import toastMessage from '../utilities/toastMessage';

/**
 *  Input sign in body form component
 */
export class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.letterRef = React.createRef();
    this.capitalRef = React.createRef();
    this.numberRef = React.createRef();
    this.lengthRef = React.createRef();
    this.errorRef = React.createRef();
    this.passwordRef = React.createRef();
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleOnSubmit = async (e) => {
    e.preventDefault();
    const { history, userLogin } = this.props;
    const response = await userLogin(this.state);
    console.log('22222', response);
    if (response) {
      if (response.success === true) {
        toastMessage({
          type: 'success',
          message: 'Login Successful'
        });
        history.push('/');
      } else if (response.success === false) {
        toastMessage({
          type: 'danger',
          message: 'Incorrect email or password. Please try again'
        });
      } else {
        toastMessage({
          type: 'danger',
          message: 'Incorrect email or password. Please try again'
        });
      }
    }
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
    } else {
      this.passwordRef.current.type = 'password';
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
      this.errorRef.current.style.display = 'none';
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

  render() {
    return (
      <span>
        <NavBar />
        <div>
          <Login
            loginHandler={this.handleOnSubmit}
            onChange={this.handleOnChange}
            onKeyUp={this.handleOnKeyUp}
            letterRef={this.letterRef}
            capitalRef={this.capitalRef}
            numberRef={this.numberRef}
            passwordRef={this.passwordRef}
            lengthRef={this.lengthRef}
            errorRef={this.errorRef}
            onBlur={this.handleOnBlur}
            onFocus={this.handleOnFocus}
            passwordToggle={this.viewPassword}
          />
        </div>
        <Footer />
      </span>
    );
  }
}

LoginPage.propTypes = {
  userLogin: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.object, PropTypes.func, PropTypes.string,
    PropTypes.number
  ])),
};

const mapDispatchToProps = {
  userLogin: loginRequest,
  Auth: auth
};

export default connect(null, mapDispatchToProps)(LoginPage);
