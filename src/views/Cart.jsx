import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Footer, CartForm
} from '../components';
import NavBar from './Navbar';

class CartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleClick = () => {
  }

  componentDidMount = async () => {
  }

  render() {
    return (
      <span>
        <NavBar />
        <CartForm />
        <Footer />
      </span>
    );
  }
}

CartPage.propTypes = {
};

const mapDispatchToProps = {
};

export default connect(null, mapDispatchToProps)(CartPage);
