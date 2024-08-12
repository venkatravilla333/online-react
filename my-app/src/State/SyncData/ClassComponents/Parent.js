import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
  constructor(props) {
    super(props)
    this.state = {
       count: 0
    }
  }

  updateData = () => {
    console.log('hello')
    this.setState({
      count : this.state.count+1
    })
  }
  render() {
    console.log('render')
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.updateData}>update data</button>
        <Child count={this.state.count} />
      </div>
    )
  }
}

export default Parent