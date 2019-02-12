import React from 'react';
import { shallow } from 'enzyme';
import { NavBarAuth } from '../../components';

describe('Integration test for the NavBarNoAuth component. ', () => {
  it('should render the whole component', () => {
    const wrapper = shallow(<NavBarAuth />);
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find('div').length).toEqual(8);
  });
});
