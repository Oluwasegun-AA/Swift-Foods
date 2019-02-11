import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  EmptyCart,
  CartForm,
  Footer,
  CartElement
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

  handleOnChange = () => {
  }

  returnAppropriateCart = (element) => {
    const { cartWeight } = this.props;

    if (cartWeight > 0 || localStorage.getItem('cart')) {
      return (
        <CartForm
          CartElement={element}
        />
      );
    }
    return <EmptyCart />;
  }

  getcart = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) {
      const each = cart.map(data => (
        <CartElement
          onChange={this.handleOnChange}
          src={data.image}
          itemName={data.name}
          price={data.price}
        />
      ));
      return each;
    }
  }

  render() {
    const returnAppropriateCart = this.returnAppropriateCart(this.getcart());
    return (
      <span>
        <NavBar />
        {returnAppropriateCart}
        <Footer />
      </span>
    );
  }
}

CartPage.propTypes = {
  cartWeight: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  cartWeight: state.menu.cartWeight
});

export default connect(mapStateToProps, null)(CartPage);
