import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '../../components';

describe('Integration test for the button component. ', () => {
  it('should render an html with a button tag', () => {
    const props = {
      onClick: () => {},
      isRequestSent: true,
      value: 'buttonValue',
      id: 'login-button',
      className: 'someClassProperty',
    };
    const wrapper = shallow(<Button {...props} />);
    expect(wrapper.find('button').text()).toEqual('buttonValue');
    expect(wrapper.find('button').length).toEqual(1);
  });
});
