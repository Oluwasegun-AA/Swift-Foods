import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { auth } from '../actions/loginActions';
import toastMessage from './toastMessage';


export default function (ComposedComponent) {
  class HomePageRedirect extends React.Component {
    componentWillMount = async () => {
      const {
        history,
        token,
        Auth
      } = this.props;
      if (localStorage.getItem('token')) {
        if (!token) {
          const response = await Auth();
          if (response === 'User') {
            toastMessage({
              type: 'success',
              message: 'Welcome Back',
              routeMessage: 'click here to checkout your orders',
              route: '/cart'
            });
            return history.push();
          }
          return history.push();
        }
      }
      return history.push('/');
    }


    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  const mapDispatchToProps = {
    Auth: () => auth
  };

  const mapStateToProps = state => ({
    isAuthenticated: state.currentUser.isAuthenticated,
    token: state.currentUser.tokenExist
  });

  HomePageRedirect.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    token: PropTypes.bool.isRequired,
    Auth: PropTypes.func.isRequired,
    history: PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.object, PropTypes.func, PropTypes.string,
      PropTypes.number
    ])),
  };

  return connect(mapStateToProps, mapDispatchToProps)(HomePageRedirect);
}
