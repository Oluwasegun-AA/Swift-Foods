import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  ErrorPage, Footer, NavBarNoAuth
} from '../components';

class ErrorPageView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <span>
        <NavBarNoAuth />
        <ErrorPage />
        <Footer />
      </span>
    );
  }
}

export default withRouter(ErrorPageView);
