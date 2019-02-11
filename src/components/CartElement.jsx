import React from 'react';
import PropTypes from 'prop-types';

const CartElement = ({
  onChange,
  src,
  itemName,
  price
}) => (
  <div className="cartElement">
    <div className="cartItem">
      <span className="description">{itemName}</span>
      <span className="description">
        Price:
        {' '}
        {price}
        {' '}
      </span>
      <img src={src} className="itemLogo" />
    </div>
    <div className="cartAttributes">
      <div className="quantity">
        <span>Qty </span>
        <input
          type="number"
          onChange={onChange}
          min="1"
          max="100"
          className="itemQuantity"
          placeholder="1"
          required
        />
      </div>
      <div className="cost">
        <span>Cost: </span>
        <span>{price}</span>
      </div>
    </div>
  </div>
);

CartElement.propTypes = {
  onChange: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};

export default CartElement;
