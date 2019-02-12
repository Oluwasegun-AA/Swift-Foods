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
      count: 0
    };
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleOnSubmit = async (e) => {
    e.preventDefault();
    // if (this.state.count === 4) {
    const { history, userLogin } = this.props;
    const response = await userLogin(this.state);
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
    // }
    // return toastMessage({
    //   type: 'danger',
    //   message: 'Invalid Username or Password',
    // });
  }

  validate = (value, attribute, check) => {
    if (value.match(check)) {
      attribute.className = 'valid';
    } else {
      attribute.className = 'invalid';
    }
  }

  handleOnKeyUp = (e) => {
    const error = e.currentTarget.parentElement.parentElement.children[6].children[1];
    const letter = e.currentTarget.parentElement.parentElement.children[6].children[1].children[1];
    const capital = e.currentTarget.parentElement.parentElement.children[6].children[1].children[2];
    const number = e.currentTarget.parentElement.parentElement.children[6].children[1].children[3];
    const length = e.currentTarget.parentElement.parentElement.children[6].children[1].children[4];
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
      this.setState({ count: '4' });
      error.style.display = 'none';
    }
  }

  handleOnBlur = (e) => {
    const element = e.currentTarget.parentElement.parentElement;
    element.children[6].children[1].style.display = 'none';
  }

handleOnFocus = (e) => {
  const element = e.currentTarget.parentElement.parentElement;
  element.children[6].children[1].style.display = 'block';
}

viewPassword = (e) => {
  const element = e.currentTarget.parentElement.parentElement;
  if (element.children[3].children[0].type === 'password') {
    element.children[3].children[0].type = 'text';
  } else {
    element.children[3].children[0].type = 'password';
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
