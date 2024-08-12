import React, { Component } from 'react'

export class Child extends Component {
  render() {
    console.log(this.props)
    var {count} = this.props
    return (
      <div>Child: {count}</div>
    )
  }
}

export default Child