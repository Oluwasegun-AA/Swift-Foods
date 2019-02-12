import React from 'react';
import { shallow } from 'enzyme';
import { NavBarNoAuth } from '../../components';

describe('Integration test for the NavBarNoAuth component. ', () => {
  it('should render the whole component', () => {
    const wrapper = shallow(<NavBarNoAuth />);
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find('div').length).toEqual(3);
  });
});
