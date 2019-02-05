import { SET_CURRENT_USER } from '../actionTypes';

const initialState = {
  isAuthenticated: false,
  userInfo: {},
  tokenExist: false
};

const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: action.userInfo
        && Object.keys(action.userInfo).length > 0,
        userInfo: action.userInfo,
        tokenExist: true
      };
    default: return state;
  }
};

export default authReducer;
