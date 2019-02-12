import React from 'react';
import { shallow } from 'enzyme';
import { SignupPage } from '../../views/SignupPage';

describe('Unit test for CartPage', () => {
  let wrapper;
  let propsObject;
  let instance;

  beforeEach(() => {
    propsObject = {
      oonChange: () => '',
      src: 'kjhfdty',
      itemName: 'name',
      price: '800'
    };

    wrapper = shallow(<SignupPage {...propsObject} />);
    instance = wrapper.instance();
  });

  it('should be Valid', () => {
    const e = {
      target: {
        name: 'hi',
        value: ''
      },
      currentTarget: {
        parentElement: {
          parentElement: {
            children: [{}, {}, {}, { children: [{ a: { children: { type: 'password' } } }] }, {}, { children: [{ a: { type: '' } }] }, {}, { children: [{ a: { type: '' } }] }, { children: [{ a: { innerHTML: '', style: { display: '', color: '' } } }] }, {}, {}, { children: [{}, { style: { display: '' }, children: [{ a: { className: '' } }, { a: { className: '' } }, { a: { className: '' } }, { a: { className: '' } }, { a: { className: '' } }] }] }]
          }
        }
      }
    };

    const event = {
      target: {
        name: 'hi',
        value: '23edG6yjk'
      },
      currentTarget: {
        parentElement: {
          parentElement: {
            children: [{}, {}, {}, { children: [{ a: { children: { type: 'password' } } }] }, {}, { children: [{ a: { type: 'password' } }] }, {}, { children: [{ a: { type: '' } }] }, { children: [{ a: { innerHTML: '', style: { display: '', color: '' } } }] }, {}, {}, { children: [{}, { style: { display: '' }, children: [{ a: { className: '' } }, { a: { className: '' } }, { a: { className: '' } }, { a: { className: '' } }, { a: { className: '' } }] }] }]
          }
        }
      }
    };
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toEqual(1);
    instance.handleOnChange(e);
    instance.handleOnBlur(e);
    instance.handleOnFocus(e);
    instance.viewPassword(e);
    instance.handleOnKeyUp(e);
    instance.viewPassword(event);
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toEqual(1);
  });
});
