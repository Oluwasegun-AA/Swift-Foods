import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Navbar } from '../../views/Navbar';

describe('Unit test for CartPage', () => {
  let wrapper;
  let propsObject;
  let event;
  let instance;

  beforeEach(() => {
    propsObject = {
      oonChange: () => '',
      signOut: () => '',
      src: 'kjhfdty',
      itemName: 'name',
      price: '800',
      currentUser: {
        isAuthenticated: false
      },
      children: {
        props: {
          history: {
            push: jest.fn() // () => {};
          }
        }
      }
    };

    wrapper = shallow(<Navbar {...propsObject} />);
    instance = wrapper.instance();
  });

  it('should be Valid', () => {
    event = {
      preventDefault: () => ''
    };
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toEqual(1);
    instance.onClick(event);
    expect(propsObject.children.props.history.push.mock.calls.length).toEqual(1);
    sinon.stub(JSON, 'parse').returned([{}, {}]);
    instance.returnAppropriateNavbar('cart');
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toEqual(1);
  });
});
