import React from 'react';
import { shallow } from 'enzyme';
import { MenuForm } from '../../components';

describe('Integration test for the MenuForm component. ', () => {
  it('should render the whole component', () => {
    const props = {
      onClick: () => {},
      onChnage: () => {},
      loginhandler: 'buttonValue',
      letterRef: 'buttonValue',
      capitalRef: 'buttonValue',
      errorRef: 'buttonValue',
      numberRef: 'buttonValue',
      onKeyUp: 'buttonValue',
      onBlur: 'buttonValue',
      onFocus: 'buttonValue',
      lengthRef: 'buttonValue',
      passwordToggle: 'any',
      menu: 'any'
    };
    const wrapper = shallow(<MenuForm {...props} />);
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find('div').length).toEqual(29);
  });
});
