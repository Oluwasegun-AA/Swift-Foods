import React from 'react';
import { shallow } from 'enzyme';
import { CartElement } from '../../components';

describe('Integration test for the CartElement component. ', () => {
  it('should render the whole component', () => {
    const props = {
      onChange: () => {},
      src: 'buttonValue',
      itemName: 'login-button',
      price: 'someClassProperty',
    };
    const wrapper = shallow(<CartElement {...props} />);
    expect(wrapper.find('input').length).toEqual(1);
  });
});
