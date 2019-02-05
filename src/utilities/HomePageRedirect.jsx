import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { auth } from '../actions/loginActions';


export default function (ComposedComponent) {
  class HomePageRedirect extends React.Component {
    componentWillMount = async () => {
      const {
        history,
        token,
      } = this.props;
      if (!token) {
        const response = await auth();
        console.log(response);
        if (response === 'User') {
          history.push();
        }
        return history.push('/');
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  const mapDispatchToProps = {
    Auth: auth
  };

  const mapStateToProps = state => ({
    isAuthenticated: state.currentUser.isAuthenticated,
    token: state.currentUser.tokenExist
  });
  HomePageRedirect.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    token: PropTypes.bool.isRequired,
    history: PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.object, PropTypes.func, PropTypes.string,
      PropTypes.number
    ])),
  };

  return connect(mapStateToProps, mapDispatchToProps)(HomePageRedirect);
}
