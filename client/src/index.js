import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import configStore from './store/configStore';
import App from './component/App';
import Home from './component/Home';

const store = configStore();
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Home}/>
      </Route>
    </Router>
  </Provider>
, document.getElementById('app'));
