import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({
  id,
  placeHolder,
  onChange,
  type,
  className,
  Ref,
  name,
  onKeyUp,
  onBlur,
  onFocus
}) => (
  <div className="form-input">
    <input
      type={type}
      className={className}
      id={id}
      required
      onChange={onChange}
      placeholder={placeHolder}
      ref={Ref}
      name={name}
      onKeyUp={onKeyUp}
      onBlur={onBlur}
      onFocus={onFocus}
    />
  </div>
);

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  Ref: PropTypes.objectOf(PropTypes.any),
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onKeyUp: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func
};

FormInput.defaultProps = {
  Ref: React.createRef(),
  onKeyUp: () => (''),
  onBlur: () => (''),
  onFocus: () => ('')
};

export default FormInput;
