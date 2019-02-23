import sinon from 'sinon';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import chai from 'chai';
import * as apiRequests from '../../utilities/apiRequests';
import { auth, loginRequest, setCurrentUser } from '../../actions/loginActions';
import * as types from '../../actionTypes';

const { expect } = chai;
const middleware = [thunk];
const mockStore = configureMockStore(middleware);


describe('Test for Login Action', () => {
  it('should verify a user', async () => {
    const data = {
      username: 'username',
      password: 'password'
    };
    const res = {
      success: true,
      token: 'abcd',
      user: {
        user_name: 'username',
        user_image: 'password'
      }
    };
    const store = mockStore({
      isAuthenticated: false,
      userInfo: {},
      tokenExist: false
    });
    const stubApiRequest = sinon.stub(apiRequests, 'Post')
      .returns(res);
    const response = await store.dispatch(loginRequest(data));
    expect(response).to.equal(true);
    stubApiRequest.restore();
  });
  it('should verify a user while token is valid', async () => {
    const res = {
      success: true,
      token: 'abcd',
      user: {
        user_name: 'username',
        user_image: 'password'
      }
    };
    const store = mockStore({
      isAuthenticated: false,
      userInfo: {},
      tokenExist: false
    });
    const stubApiRequest = sinon.stub(apiRequests, 'Post')
      .returns(res);
    const response = await store.dispatch(auth());
    expect(response).to.equal('Admin');
    stubApiRequest.restore();
  });
  it('creates a SET_CURRENT_USER action type', async () => {
    const expectedAction = [
      {
        type: types.SET_CURRENT_USER,
        userInfo: {}
      }
    ];
    const store = mockStore({});
    await store.dispatch(setCurrentUser({}));
    expect(store.getActions()).to.deep.equal(expectedAction);
  });
});

describe('Get route failed actions', () => {
  let FailedRequest;
  beforeEach(() => {
    FailedRequest = sinon
      .stub(apiRequests, 'Post').returns(1).throws({ response: 'Network error' });
  });

  afterEach(() => {
    FailedRequest.restore();
  });
  it('returns an error when trying to login',
    async () => {
      const data = {
        username: 'username',
        password: 'password'
      };
      const store = mockStore({});
      const error = await store.dispatch(loginRequest(data));
      expect(error).to.equal('Network error');
    });
  it('returns an error when being authenticated',
    async () => {
      const store = mockStore({});
      const error = await store.dispatch(auth());
      expect(error).to.equal('Failed');
    });
});
