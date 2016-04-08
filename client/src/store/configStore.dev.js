import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
//import {hashHistory} from 'react-router';
//import {syncHistory} from 'react-router-redux';
import rootReducer from '../reducers/rootReducer';

export default function configureStore(initialState) {
  //const reduxRouterMiddleware = syncHistory(hashHistory);

  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(thunk, createLogger()))
  )

  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('../reducers', () => {
  //     const nextRootReducer = require('../reducers').default
  //     store.replaceReducer(nextRootReducer)
  //   })
  // }

  return store
}
