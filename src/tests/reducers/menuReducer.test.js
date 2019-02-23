import menuReducer from '../../reducers/menuReducer';
import * as actionTypes from '../../actionTypes';

describe('Unit test for the signup reducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      cartWeight: 0,
      cartInfo: {}
    };
    expect(menuReducer(undefined, {})).toEqual(initialState);
  });
  it('should update state on successful signup', () => {
    const data = {};
    const signupActionCreator = {
      type: actionTypes.ADD_TO_CART,
      data,
    };
    expect(menuReducer({}, signupActionCreator))
      .toEqual({
        cartWeight: NaN,
        cartInfo: {}
      });
  });
  it('should update state on successful signup', () => {
    const data = {};
    const signupActionCreator = {
      type: actionTypes.CLEAR_CART,
      data,
    };
    expect(menuReducer({}, signupActionCreator))
      .toEqual({
        cartWeight: 0,
        cartInfo: {}
      });
  });
});
