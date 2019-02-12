import sinon from 'sinon';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import chai from 'chai';
import * as apiRequests from '../../utilities/apiRequests';
import { signupUser } from '../../actions/signupActions';

const { expect } = chai;
const middleware = [thunk];
const mockStore = configureMockStore(middleware);


describe('menu Actions', () => {
  it('should fetch menu', async () => {
    const data = {
      username: 'username',
      password: 'password'
    };
    const res = {
      success: true,
      token: 'abcd',
      Food_Items: {
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
    const response = await store.dispatch(signupUser(data));
    expect(response).to.deep.equal(res);
    stubApiRequest.restore();
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
  it('returns an error when fetching menu',
    async () => {
      const data = {
        username: 'username',
        password: 'password'
      };
      const store = mockStore({});
      const error = await store.dispatch(signupUser(data));
      console.log(error);
      expect(error.response).to.equal('Network error');
    });
});
