import React, { Component } from 'react'

export class Render extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      count:0
    }
  }

  increaseCount = () => {
    this.setState({
      count: this.state.count+1
    })
  }
  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.render(this.state.count, this.increaseCount)}
      </div>
    )
  }
}

export default Render