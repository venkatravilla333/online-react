import React, { Component } from 'react';

export class Count2 extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   count: 0,
    // };
  }

  // increaseCount = () => {
  //   this.setState({
  //     count: this.state.count + 1,
  //   });
  // };

  render() {
    console.log(this.props)
    return (
      <div>
        <h3>Count1: {this.props.count}</h3>
        <button onMouseOver={this.props.increaseCount}>increase count</button>
      </div>
    );
  }
}

export default Count2;
