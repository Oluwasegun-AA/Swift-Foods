import React from 'react';
import { shallow } from 'enzyme';
import { Links } from '../../components';

describe('Integration test for the Links component. ', () => {
  it('should render the whole component', () => {
    const wrapper = shallow(<Links />);
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find('div').length).toEqual(0);
  });
});
