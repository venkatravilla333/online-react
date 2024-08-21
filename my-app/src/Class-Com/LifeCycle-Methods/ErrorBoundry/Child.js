import React, { Component } from 'react'

export class Child extends Component {

  render() {
    var { name } = this.props
    if (name === 'sachin') {
      throw 'he is  a cricket'
    }
    return (
      <div>{this.props.name}</div>
    )
  }
}

export default Child