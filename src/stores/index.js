
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './../reducers';
const loggerMiddleware = createLogger();

const createStoreWithMiddleWare = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)(createStore);


export default () => createStoreWithMiddleWare(rootReducer)


//export default function(initialState) {
//  const store = redux.createStore(reducers, initialState);
//
//  if (module.hot) {
//    // Enable Webpack hot module replacement for reducers
//    module.hot.accept('../reducers', () => {
//      const nextReducer = require('../reducers');
//      store.replaceReducer(nextReducer)
//    })
//  }
//
//
//
//  return store
//}
