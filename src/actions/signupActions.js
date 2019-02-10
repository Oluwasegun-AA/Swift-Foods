/* eslint-disable camelcase */
import { Post } from '../utilities/apiRequests';
import { SIGN_UP_SUCCESS } from '../actionTypes';
import toastMessage from '../utilities/toastMessage';

export const signupSuccess = userInfo => ({
  type: SIGN_UP_SUCCESS,
  userInfo,
});
export const signupUser = userDetails => async (dispatch) => {
  const data = {
    user_name: userDetails.username,
    user_role: 'User',
    user_email: userDetails.email,
    user_password: userDetails.password
  };
  try {
    const response = await Post('/auth/signup', data);
    if (response.success === true) {
      const { User_sent } = response;
      dispatch(signupSuccess(User_sent));
      return response;
    }
    return response;
  } catch (error) {
    if (error.message === 'Network Error') {
      return toastMessage({
        type: 'danger',
        message: 'Could not connect to the internet. '
        + 'Please check your internet connection.'
      });
    }
    return error;
  }
};
