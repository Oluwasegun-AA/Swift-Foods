import React from 'react';
import { shallow } from 'enzyme';
import { FormInput } from '../../components';

describe('Integration test for the FormInput component. ', () => {
  it('should render the whole component', () => {
    const props = {
      onClick: () => {},
      onChange: () => {},
      id: 'buttonValue',
      placeHolder: 'buttonValue',
      type: 'buttonValue',
      className: 'buttonValue',
      Ref: {},
      onKeyUp: () => {},
      onBlur: () => {},
      onFocus: () => {},
      name: 'kjk',
    };
    const wrapper = shallow(<FormInput {...props} />);
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('input').length).toEqual(1);
  });
});
