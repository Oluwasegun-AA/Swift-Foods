import React from 'react';
import PropTypes from 'prop-types';

const CartForm = ({
  CartElement,
  addressRef,
  onClick
}) => (
  <div className="gridContainerCart">
    <div className="gridTopCart" />
    <div className="gridRightCart" />
    <div className="gridMiddleCart">
      <div className="cartInformation">
        {CartElement}
      </div>

      <div className="checkout">
        <span className="addressdescription">
          Enter your Address Here
        </span>
        <div className="address">
          <input
            ref={addressRef}
            type="text"
            placeholder="A16, Manilla estate, Adebakin street, Ketu"
            className="address"
          />
        </div>
      </div>
      <button
        type="button"
        onClick={onClick}
        className="button placeorder"
      >
       Place Order

      </button>

    </div>
    <div className="gridLeftCart" />
    <div className="gridBottomCart" />
  </div>

);

CartForm.propTypes = {
  CartElement: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
  addressRef: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default CartForm;
