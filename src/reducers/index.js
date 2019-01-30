import { combineReducers } from 'redux';
import flashMessages from './flashReducer';
import authReducer from './authReducer';


const rootReducers = combineReducers({
  flashMessages,
  currentUser: authReducer,
});

export default rootReducers;
