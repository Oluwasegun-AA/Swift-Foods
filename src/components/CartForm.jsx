import React from 'react';
import PropTypes from 'prop-types';

const CartForm = ({ CartElement }) => (
  <div className="gridContainerCart">
    <div className="gridTopCart" />
    <div className="gridRightCart" />
    <div className="gridMiddleCart">
      <div className="cartInformation">
        {CartElement}
      </div>
      <button type="button" className="button placeorder">Place Order</button>

    </div>
    <div className="gridLeftCart" />
    <div className="gridBottomCart" />
  </div>

);

CartForm.propTypes = {
  CartElement: PropTypes.any,
};

export default CartForm;
