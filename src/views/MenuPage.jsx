import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Footer, MenuForm
} from '../components';
import NavBar from './Navbar';

class MenuPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <span>
        <NavBar />
        <MenuForm />
        <Footer />
      </span>
    );
  }
}

export default withRouter(MenuPage);
