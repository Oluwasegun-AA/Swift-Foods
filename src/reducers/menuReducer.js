import { ADD_TO_CART } from '../actionTypes';

const initialState = {
  cartWeight: 0,
  cartInfo: {}
};

const menuReducer = (state = initialState, action = {}) => {
  const { data } = action;
  switch (action.type) {
    case ADD_TO_CART:
      return {
        cartWeight: state.cartWeight + 1,
        cartInfo: data
      };
    default: return state;
  }
};

export default menuReducer;
