import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavBarAuth from '../components/NavBarAuth';
import NavBarNoAuth from '../components/NavBarNoAuth';
import logout from '../actions/logout';

class Navbar extends Component {
  onClick = (event) => {
    event.preventDefault();
    const {
      signOut,
      children: {
        props: {
          history
        }
      }
    } = this.props;
    signOut();

    history.push('/');
  }

  returnAppropriateNavbar = () => {
    const {
      signOut,
      currentUser: {
        isAuthenticated
      }
    } = this.props;

    if (isAuthenticated) {
      return (
        <NavBarAuth
          signOut={signOut}
        />
      );
    }
    return <NavBarNoAuth />;
  }

  render() {
    const returnAppropriateNavbar = this.returnAppropriateNavbar();

    return (
      <div>
        { returnAppropriateNavbar }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

Navbar.propTypes = {
  currentUser: PropTypes.objectOf(PropTypes.string).isRequired,
  signOut: PropTypes.func.isRequired,
  children: PropTypes.objectOf(PropTypes.string)
};

Navbar.defaultProps = {
  children: {}
};

const mapDispatchToProps = {
  signOut: logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
