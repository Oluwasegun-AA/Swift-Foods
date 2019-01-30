import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
