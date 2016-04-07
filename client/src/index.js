import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {Provider} from 'react-redux';
import configStore from './store/configStore';
import App from './components/App';
import Home from './components/Home';

const store = configStore();

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app'));
