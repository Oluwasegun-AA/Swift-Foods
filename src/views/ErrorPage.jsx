import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  ErrorPage, Footer
} from '../components';
import NavBar from './Navbar';

class ErrorPageView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <span>
        <NavBar />
        <ErrorPage />
        <Footer />
      </span>
    );
  }
}

export default withRouter(ErrorPageView);
