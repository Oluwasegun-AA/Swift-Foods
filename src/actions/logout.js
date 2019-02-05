import setAuthorizationToken from '../utilities/setAuthorizationToken';
import { setCurrentUser } from './loginActions';

const logout = () => (dispatch) => {
  setAuthorizationToken(false);
  dispatch(setCurrentUser({}));
};

export default logout;
