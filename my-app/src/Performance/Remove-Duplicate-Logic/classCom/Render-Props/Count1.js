import React, { Component } from 'react'

export class Count1 extends Component {
  constructor(props) {
    super(props)
  
    // this.state = {
    //    count: 0
    // }
  }

  // increaseCount = () => {
  //   this.setState({
  //     count: this.state.count+1
  //   })
  // }


  render() {
    console.log(this.props)
    return (
      <div>
        <h3>Count1: {this.props.count}</h3>
        <button onClick={this.props.increaseCount}>increase count</button>
      </div>
    )
  }
}

export default Count1