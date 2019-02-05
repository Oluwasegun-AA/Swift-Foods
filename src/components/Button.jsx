import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  onClick,
  isRequestSent,
  value,
  className
}) => (
  <button
    type="button"
    className={`button ${className}`}
    onClick={onClick}
    disabled={isRequestSent}
  >
    {value}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  isRequestSent: PropTypes.bool,
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

Button.defaultProps = {
  onClick: '',
  isRequestSent: false
};

export default Button;
