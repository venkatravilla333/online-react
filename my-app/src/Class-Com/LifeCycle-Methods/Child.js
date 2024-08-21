import React, { Component } from 'react';

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'sachin',
    };
    console.log('Child constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Child get derived');
    return null;
  }

  componentDidMount() {
    console.log('Child did mount');
  }

  shouldComponentUpdate() {
    console.log('child should update');
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('child get snap');
    return null;
  }

  componentDidUpdate() {
    console.log('child did update');
  }

  render() {
    console.log('Child render');
    return <div>Child</div>;
  }
}

export default Child;
