import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const CartForm = () => (
  <div className="gridContainer">
    <div className="gridTop" />
    <div className="gridRight" />
    <div className="gridMiddle">
      <div className="information">
        <div className="cartInformation">
          <div className="cartElement">
            <div className="item">
              <span className="description">Chicken</span>
              <span className="description">Price: #500 </span>
              <img src="img/f.jpg" className="itemLogo" />
            </div>
            <div className="cartAttributes">
              <div className="quantity">
                <span>Quantity </span>
                <input type="number" min="1" max="100" className="itemQuantity" placeholder="1" required />
              </div>
              <div className="cost">
                <span>Total:</span><span>#500</span>
                </div>
            </div>
          </div>
          <div className="totalPrice">
            <span>Total Cost :</span>
            <span className="totalCost"> #1000</span>
          </div>
          <button type="button" className="placeorder">Place Order</button>
        </div>
      </div>
    </div>
    <div className="gridLeft" />
    <div className="gridBottom" />
  </div>

);

CartForm.propTypes = {
};

export default CartForm;
