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

  onClickHandler = () => ('')

  render() {
    return (
      <span>
        <NavBar />
        <MenuForm
          onClick={this.onClickHandler}
        />
        <Footer />
      </span>
    );
  }
}

export default withRouter(MenuPage);
