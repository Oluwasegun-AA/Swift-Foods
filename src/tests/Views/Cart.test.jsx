import React from 'react';
import { shallow } from 'enzyme';
import { CartPage } from '../../views/Cart';

describe('Unit test for CartPage', () => {
  let wrapper;
  let propsObject;
  let instance;

  beforeEach(() => {
    propsObject = {
      resetCart: () => '',
      oonChange: () => '',
      src: 'kjhfdty',
      itemName: 'name',
      price: '800',
      history: {
        push: jest.fn() // () => {};
      }
    };

    wrapper = shallow(<CartPage {...propsObject} />);
    instance = wrapper.instance();
  });

  it('should be Valid', () => {
    instance.getcart();
    const e = {
      currentTarget: {
        parentElement: {
          children: [{},
            {
              children: [{},
                {
                  children: [
                    {
                      value: 'andela in lagos nigeria . '
                    }
                  ]
                }
              ]
            }
          ]
        }
      }
    };
    instance.handleOnClick(e);
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toEqual(1);
  });
});
