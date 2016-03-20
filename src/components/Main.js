require('normalize.css');
require('styles/App.css');

import React from 'react';
import reactMixin from 'react-mixin';
import mixin from './../helpers/mixin'

let yeomanImage = require('../images/yeoman.png');




@renderHello
class AppComponent extends React.Component {
}


function renderHello(target) {
  var renderMixin = mixin({
    render: () => (<div>Hello World</div>)
  });
  return renderMixin(target);
}

AppComponent.defaultProps = {
};



export default AppComponent;
