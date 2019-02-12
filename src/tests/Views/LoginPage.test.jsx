import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../views/LoginPage';

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
      history: jest.fn(),
      userLogin: () => ''
    };

    wrapper = shallow(<LoginPage {...propsObject} />);
    instance = wrapper.instance();
  });

  it('should be Valid', () => {
    const e = {
      target: {
        value: 'value3434'
      },
      currentTarget: {
        parentElement: {
          parentElement: {
            children: [{}, {}, {}, { children: [{ a: { children: { type: 'password' } } }] }, {}, {}, { children: [{}, { style: { display: '' }, children: [{ a: { className: '' } }, { a: { className: '' } }, { a: { className: '' } }, { a: { className: '' } }, { a: { className: '' } }] }] }]
          }
        }
      }
    };
    instance.handleOnSubmit();
    instance.handleOnFocus(e);
    instance.handleOnBlur(e);
    instance.handleOnKeyUp(e);
    instance.viewPassword(e);
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toEqual(1);
  });
});
