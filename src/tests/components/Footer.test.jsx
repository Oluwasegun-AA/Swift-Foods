import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from '../../components';

describe('Integration test for the Footer component. ', () => {
  it('should render the whole component', () => {
    const props = {
      onClick: () => {},
      cartElement: 'buttonValue',
      addressRef: 'login-button',
    };
    const wrapper = shallow(<Footer {...props} />);
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find('div').length).toEqual(6);
  });
});
