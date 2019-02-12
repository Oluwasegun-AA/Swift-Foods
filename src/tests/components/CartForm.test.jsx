import React from 'react';
import { shallow } from 'enzyme';
import { CartForm } from '../../components';

describe('Integration test for the CartForm component. ', () => {
  it('should render the whole component', () => {
    const props = {
      onClick: () => {},
      CartElement: 'buttonValue',
      addressRef: {},
    };
    const wrapper = shallow(<CartForm {...props} />);
    expect(wrapper.find('input').length).toEqual(1);
  });
});
