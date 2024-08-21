import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log('parent constructor');
    this.increase = this.increase.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    console.log('parent get derived');
    return null;
  }

  componentDidMount() {
    console.log('parent did mount');
  }

  shouldComponentUpdate() {
    console.log('parent should update');
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('parent get snap');
    return null;
  }

  componentDidUpdate() {
    console.log('parent did update')
  }

  increase() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    console.log('parent render');
    return (
      <div>
        <h2>Parent : {this.state.count}</h2>
        <button onClick={this.increase}>increase</button>
        <Child />
      </div>
    );
  }
}

export default Parent