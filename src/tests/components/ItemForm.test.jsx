import React from 'react';
import { shallow } from 'enzyme';
import { ItemForm } from '../../components';

describe('Integration test for the ItemForm component. ', () => {
  it('should render the whole component', () => {
    const props = {
      onClick: () => {},
      onChnage: () => {},
      id: 'buttonValue',
      price: 200,
      image: 'buttonValue',
      Key: 200,
      Ref: {},
      onKeyUp: () => {},
      onBlur: () => {},
      onFocus: () => {},
      name: 'buttonValue',
    };
    const wrapper = shallow(<ItemForm {...props} />);
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find('div').length).toEqual(1);
  });
});
