/* eslint-disable camelcase */
import { SET_CURRENT_USER } from '../actionTypes';
import setAuthorizationToken from '../utilities/setAuthorizationToken';
import { Post } from '../utilities/apiRequests';
import toastMessage from '../utilities/toastMessage';

export const setCurrentUser = userInfo => ({
  type: SET_CURRENT_USER,
  userInfo
});

export const loginRequest = data => async (dispatch) => {
  let response;
  const payload = {
    user_name: data.username,
    user_password: data.password
  };
  try {
    response = await Post('/auth/login', payload);
    if (response.success === true) {
      const { token, user } = response;
      setAuthorizationToken(token);
      dispatch(setCurrentUser(user));
      return true;
    }
    return response;
  } catch (error) {
    return error.response;
  }
};

export const auth = () => async (dispatch) => {
  try {
    const data = await Post('/auth');
    const {
      success,
      token,
      user
    } = data;
    if (success === false) {
      toastMessage({
        type: 'danger',
        message: 'Welcome to Swift Foods',
        routeMessage: 'click here to login',
        route: '/login'
      });
      return false;
    } if (success === true) {
      setAuthorizationToken(token);
      dispatch(setCurrentUser(data));
    }
    if (user.user_role === 'User') {
      return 'User';
    }
    return 'Admin';
  } catch (err) {
    if (err) {
      toastMessage({
        type: 'success',
        message: 'Welcome to Swift Foods',
        routeMessage: 'click here to login',
        route: '/login'
      });
      return 'Failed';
    }
  }
};
