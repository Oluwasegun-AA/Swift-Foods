/* eslint-disable camelcase */
import { ADD_TO_CART, CLEAR_CART } from '../actionTypes';
import { Get } from '../utilities/apiRequests';
import storage from '../utilities/storage';

export const addToCart = data => ({
  type: ADD_TO_CART,
  data
});
export const clearCart = () => ({
  type: CLEAR_CART
});

export const fetchMenu = async () => {
  try {
    const response = await Get('/menu');
    if (response.success === true) {
      return response.Food_Items;
    }
    return false;
  } catch (error) {
    return error.response;
  }
};

export const selectMenu = data => (dispatch) => {
  try {
    const update = storage('cart', data);
    dispatch(addToCart(update));
    return {
      success: true,
      data
    };
  } catch (error) {
    return error;
  }
};

export const resetCart = () => (dispatch) => {
  dispatch(clearCart());
};
