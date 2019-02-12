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
import toastMessage from '../utilities/toastMessage';
import { resetCart } from '../actions/menuActions';

export class CartPage extends Component {
  handleOnClick = (e) => {
    const { history, resetCart } = this.props;
    const target = e.currentTarget.parentElement;
    const address = target.children[1].children[1].children[0].value;
    if (address.length > 4) {
      localStorage.removeItem('cart');
      resetCart();
      toastMessage({
        type: 'Success',
        message: `Orders Placed Successfully to "${address}"`,
        routeMessage: 'click here to return home',
        route: '/'
      });
      history.push();
    } return toastMessage({
      type: 'danger',
      message: 'Please enter a valid home address',
    });
  }

  handleOnChange = () => {
  }

  returnAppropriateCart = (element) => {
    const { cartWeight } = this.props;

    if (cartWeight > 0 || localStorage.getItem('cart')) {
      return (
        <CartForm
          CartElement={element}
          addressRef={this.addressRef}
          onClick={this.handleOnClick}
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
  resetCart: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.object, PropTypes.func, PropTypes.string,
    PropTypes.number
  ])),
};

const mapStateToProps = state => ({
  cartWeight: state.menu.cartWeight
});

const mapDispatchToProps = {
  resetCart
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
