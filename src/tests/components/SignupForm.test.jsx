import React from 'react';
import { shallow } from 'enzyme';
import { SignupForm } from '../../components';

describe('Integration test for the SignupForm component. ', () => {
  it('should render the whole component', () => {
    const props = {
      onClick: () => {},
      onChange: () => {},
      letterRef: {},
      capitalRef: {},
      numberRef: {},
      lengthRef: {},
      errorRef: {},
      onKeyUp: () => {},
      onBlur: () => {},
      onFocus: () => {},
      passwordToggle: () => {},
      passwordRef: {},
      signupHandler: () => {},
      confirmPasswordRef: {},
      comparePasswordRef: {},
      comparePassword: () => {},

    };
    const wrapper = shallow(<SignupForm {...props} />);
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find('div').length).toEqual(14);
  });
});
