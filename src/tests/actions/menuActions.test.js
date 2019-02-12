import sinon from 'sinon';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import chai from 'chai';
import * as apiRequests from '../../utilities/apiRequests';
import { fetchMenu, selectMenu } from '../../actions/menuActions';

const { expect } = chai;
const middleware = [thunk];
const mockStore = configureMockStore(middleware);


describe('menu Actions', () => {
  it('should fetch menu', async () => {
    const data = {
      item_name: 'username',
      Item_image: 'password'
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
    const stubApiRequest = sinon.stub(apiRequests, 'Get')
      .returns(res);
    const response = await store.dispatch(() => fetchMenu(data));
    expect(response).to.deep.equal({
      user_name: 'username',
      user_image: 'password'
    });
    stubApiRequest.restore();
  });
  it('should select a particular menu', async () => {
    const res = {
      success: true,
      token: 'abcd',
      food: {
        item_name: 'username',
        item_image: 'password'
      }
    };
    const store = mockStore({
      isAuthenticated: false,
      userInfo: {},
      tokenExist: false
    });
    const stubApiRequest = sinon.stub(apiRequests, 'Post')
      .returns(res);
    const response = await store.dispatch(selectMenu());
    expect(response.success).to.equal(true);
    stubApiRequest.restore();
  });
});

describe('Get route failed actions', () => {
  let FailedRequest;
  beforeEach(() => {
    FailedRequest = sinon
      .stub(apiRequests, 'Get').returns(1).throws({ response: 'Network error' });
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
      const error = await store.dispatch(() => fetchMenu(data));
      expect(error).to.equal('Network error');
    });
  it('returns an error when selecting menu',
    async () => {
      const store = mockStore({});
      await store.dispatch(selectMenu());
    });
});
