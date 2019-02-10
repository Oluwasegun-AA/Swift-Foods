/* eslint-disable camelcase */
import { ADD_TO_CART } from '../actionTypes';
import { Get } from '../utilities/apiRequests';

export const addToCart = data => ({
  type: ADD_TO_CART,
  data
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
