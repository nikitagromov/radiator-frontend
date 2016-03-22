import React from 'react';

class InfoTextComponent extends React.Component {

  static contextTypes = {
    store: React.PropTypes.object
  };

  componentWillMount() {
    this.unsubscribe = this.context.store.subscribe(this.updateData.bind(this));
  }

  static getInitialState() {
    return {
      tree: null
    }
  }

  componentWillUnmount(){
    this.unsubscribe()
  }

  updateData() {
    var data = this.context.store.getState().radiator.data;
    this.setState({tree: data});
  }

  render() {
    if (!this.state || !this.state.tree) {
      return (<div>
         <span>
          <p> Passed: 0</p>
          <p> Pending: 0</p>
          <p> Failed: 0</p>
        </span>
      </div>)

    } else {
      var preparedObject = InfoTextComponent.prepareTextData(this.state.tree);

      return (<div className="col-md-4">
        <span>
          <p> Passed: {preparedObject.passed} </p>
          <p> Pending: {preparedObject.pending} </p>
          <p> Failed: {preparedObject.failed} </p>
        </span>
      </div>)
    }
  }

  static prepareTextData(dataTree) {
    return {
      passed: dataTree.thucydidesTestStaistic.passed,
      pending: dataTree.thucydidesTestStaistic.pending,
      failed: dataTree.thucydidesTestStaistic.failed
    }
  }
}

export default InfoTextComponent;
