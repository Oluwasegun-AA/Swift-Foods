
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { SET_CURRENT_USER } from '../actionTypes';
import setAuthorizationToken from '../utilities/setAuthorizationToken';

export const setCurrentUser = userInfo => ({
  type: SET_CURRENT_USER,
  userInfo
});

export const loginRequest = (userData) => {
  const sentData = {
    email: userData.email,
    password: userData.password
  };
  return async (dispatch) => {
    let loginResponse;
    try {
      loginResponse = await axios({
        method: 'post',
        url:
        'https://swift-foods-backend.herokuapp.com/api/v1',
        data: sentData
      });
      const { token } = loginResponse.data.userDetails;
      const decodedToken = jwt.decode(token);
      localStorage.setItem('token', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(decodedToken));
      return loginResponse;
    } catch (error) {
      return error.response;
    }
  };
};
