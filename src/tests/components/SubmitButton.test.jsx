import React from 'react';
import { shallow } from 'enzyme';
import { SubmitButton } from '../../components';

describe('Integration test for the SubmitButton component. ', () => {
  it('should render the whole component', () => {
    const props = {
      isRequestSent: true,
      columnAttribute: 'any',
      onClick: () => {},
      value: 'any',
      id: 'any',
      className: 'any'
    };
    const wrapper = shallow(<SubmitButton {...props} />);
    expect(wrapper.length).toEqual(1);
    expect(wrapper.find('div').length).toEqual(2);
  });
});
