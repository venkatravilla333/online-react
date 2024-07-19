import React, { Component } from 'react'
import { hoc } from './hoc'

export class Count3 extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h2>Count3: {this.props.count}</h2>
        <button onDoubleClick={this.props.increaseCount}>Increase count</button>
      </div>
    );
  }
}

export default hoc(Count3)