import React from 'react';
import { shallow } from 'enzyme';
import { ErrorPageView } from '../../views/ErrorPage';

describe('Unit test for CartPage', () => {
  let wrapper;
  let propsObject;

  beforeEach(() => {
    propsObject = {
      oonChange: () => '',
      src: 'kjhfdty',
      itemName: 'name',
      price: '800'
    };

    wrapper = shallow(<ErrorPageView {...propsObject} />);
  });

  it('should be Valid', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toEqual(1);
  });
});
