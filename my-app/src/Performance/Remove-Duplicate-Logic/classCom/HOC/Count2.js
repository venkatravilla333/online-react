import React, { Component } from 'react'
import { hoc } from './hoc';

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
        <h2>Count2: {this.props.count}</h2> 
        <button onMouseOver={this.props.increaseCount}>Increase count</button>
      </div>
    );
  }
}

export default hoc(Count2)