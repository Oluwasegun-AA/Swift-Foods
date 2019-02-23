import React from 'react';
import { shallow } from 'enzyme';
import { LandingPage } from '../../views/LandingPage';

describe('Unit test for CartPage', () => {
  let wrapper;
  let propsObject;
  let instance;

  beforeEach(() => {
    propsObject = {
      oonChange: () => '',
      src: 'kjhfdty',
      itemName: 'name',
      price: '800',
      history: {
        push: jest.fn() // () => {};
      }
    };

    wrapper = shallow(<LandingPage {...propsObject} />);
    instance = wrapper.instance();
  });

  it('should be Valid', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toEqual(1);
    instance.handleOnClick();
    expect(propsObject.history.push.mock.calls.length).toEqual(1);
  });
});
