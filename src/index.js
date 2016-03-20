import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';
import App from './containers/App';
import {Router, Route, Link, browserHistory} from 'react-router'

const store = configureStore();
//
//render(
//  <Provider store={store}>
//    <App />
//  </Provider>,
//  document.getElementById('app')
//);

render((<Provider store={store}><Router history={browserHistory}>
  <Route path="/home"  component={App}/>
  </Router>
  </Provider>
  ), document.getElementById('app'));
