import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { MenuPage } from '../../views/MenuPage';

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
      selectMenu: () => ''
    };
    wrapper = shallow(<MenuPage {...propsObject} />);
    instance = wrapper.instance();
  });

  it('should be Valid', () => {
    const e = {
      currentTarget: {
        parentElement: {
          parentElement: { children: [{ innerHTML: '' }, { innerHTML: '' }, { src: '' }] }
        }
      }
    };
    sinon.stub(React, 'createRef').returns({ current: { value: { address: 'mt address' } } });
    instance.handleClick(e);
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toEqual(1);
  });
});
