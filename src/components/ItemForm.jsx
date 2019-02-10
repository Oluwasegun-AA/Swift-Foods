import React from 'react';
import PropTypes from 'prop-types';

const ItemForm = ({
  onClick,
  name,
  price,
  image,
  Key
}) => (
  <div id="item" key={Key} className="item">
    <span className="description">{name}</span>
    <span className="description">
       #
      {price}
    </span>
    <img src={image} className="itemLogo" />
    <span className="addToCartBtnDiv">
      <button
        type="button"
        id="addToCartBtn"
        onClick={onClick}
        className="button addToCartBtn"
      >
        Add to Cart
      </button>
    </span>
  </div>
);

ItemForm.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  Key: PropTypes.number.isRequired
};

export default ItemForm;
