import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  Button,
  Footer
} from '../components';
import NavBar from './Navbar';

class LandingPage extends Component {
  handleOnClick= () => {
    const { history } = this.props;
    history.push('/menu');
  }

  render() {
    return (
      <span>
        <NavBar />
        <div className="landing-page">
          <div className="landing-page-blur">
            <div className="landing-page-container">
              <div className="landing-page-container-content">
                <article
                  className="landing-page-text"
                >
              An Incredible Taste You can Trust
                </article>
                <Button
                  onClick={this.handleOnClick}
                  value="Place an Order"
                  className="landing-page-botton"
                />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </span>
    );
  }
}

LandingPage.propTypes = {
  history: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.object, PropTypes.func, PropTypes.string,
    PropTypes.number
  ])),
};

export default withRouter(LandingPage);
