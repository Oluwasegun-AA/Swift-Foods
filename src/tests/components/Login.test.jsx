import React from 'react';
import { shallow } from 'enzyme';
import { Login } from '../../components';

describe('Integration test for the Login component. ', () => {
  it('should render the whole component', () => {
    const props = {
      onClick: () => {},
      onChange: () => {},
      loginHandler: () => {},
      letterRef: {},
      capitalRef: {},
      errorRef: {},
      numberRef: {},
      onKeyUp: () => {},
      onBlur: () => {},
      onFocus: () => {},
      lengthRef: {},
      passwordToggle: () => {},
      passwordRef: {}
    };
    const wrapper = shallow(<Login {...props} />);
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find('div').length).toEqual(12);
  });
});
