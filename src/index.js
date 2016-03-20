import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {fetchData} from './actions/Actions';
import createStore from './stores';
import App from './containers/App';
import {Router, Route, Link, browserHistory} from 'react-router'

const store = createStore();


store.dispatch(fetchData()).then(() => console.log(store.getState()))


//
//render(
//  <Provider store={store}>
//    <App />
//  </Provider>,
//  document.getElementById('app')
//);

render((<Provider store={store}><Router history={browserHistory}>
  <Route path="/"  component={App}/>
  </Router>
  </Provider>
  ), document.getElementById('app'));
