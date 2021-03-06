require('normalize.css');
require('styles/App.css');

import React from 'react';
import {fetchData} from './../actions/Actions';
import {connect} from 'react-redux';
import {interval} from './../decorators';
import PieChart  from 'react-simple-pie-chart';



@interval(60 * 1000, fetchData)
class PieComponent extends React.Component {
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
      let result = [{value: 100, color: '#cc0033'}];
      return (
        <div className="col-md-2 pie">
          <PieChart slices={result} />
        </div>)

    } else {
      var preparedObject = PieComponent.preparePieData(this.state.tree);
      let result = [
        {value: preparedObject.passed, color: '#49ff00'}, //passed
        {value: preparedObject.pending, color: '#FFCC11'}, //pending
        {value: preparedObject.failed, color: '#cc0033'}  //failed
      ];
      return (
        <div className="col-md-2 pie">
          <PieChart slices={result} />
        </div>)
    }
  }

  static preparePieData(dataTree) {
    return {
      passed: dataTree.thucydidesTestStaistic.passed,
      pending: dataTree.thucydidesTestStaistic.pending,
      failed: dataTree.thucydidesTestStaistic.failed
    }
  }

}


export default PieComponent;
