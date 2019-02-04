import React from 'react';
import { error } from '../styles/images';

const ErrorPage = () => (
  <div className="errorContainer">
    <div className="top" />
    <div className="right" />
    <div className="middle">
      <img src={error} className="err404" />
      <h2>We're sorry, we couldn't find what you were looking for.</h2>
      <p>
       If you were following a documentation link, please visit
        {' '}
        <a href="//fast-food-fast1.herokuapp.com/api/v1/api-docs/">here</a>
      </p>
    </div>
    <div className="left" />
    <div className="bottom" />
  </div>
);

export default ErrorPage;
