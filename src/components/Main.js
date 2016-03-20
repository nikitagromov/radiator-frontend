require('normalize.css');
require('styles/App.css');

import React from 'react';
import {fetchData} from './../actions/Actions';
import {connect} from 'react-redux';
import {interval} from './../decorators';


@interval(60 * 1000, fetchData)
class AppComponent extends React.Component {
  static contextTypes = {
    store: React.PropTypes.object
  };

  componentWillMount() {
    this.activateInterval();
    this.unsubscribe = this.context.store.subscribe(this.updateData.bind(this));
  }

  static getInitialState() {
    return {
      tree: null
    }
  }

  componentWillUnmount(){
    this.deactivateInterval();
    this.unsubscribe();
  }

  updateData() {
    var data = this.context.store.getState().radiator.data;
    this.setState({tree: data});
  }

  render() {
    if (!this.state || !this.state.tree) {
      return (<div><span>Hello World</span></div>)
    } else {
      return (<div><span>{this.state.tree.buildStates.BUILD.state}</span></div>)
    }
  }
}

export default AppComponent;
