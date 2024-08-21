import React, { Component } from 'react'

export class Parent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      domCount: 0,
      normalCount: 100,
    }
  }

  updateDomCount=()=>{
    this.setState({
    domCount: this.state.domCount+1
  })
}
  updateNormalCount=()=>{
    this.setState({
    normalCount: this.state.normalCount+1
  })
}

componentDidMount() {
  console.log('did mount')
  document.title = `${this.state.domCount}`
}
  componentDidUpdate(preProps, preState) {
    if (preState.domCount !== this.state.domCount) {
      console.log('did update');
      document.title = `${this.state.domCount}`;
    }
}
  render() {
    console.log('render')
    return (
      <div>
        <h2>Dom Count: {this.state.domCount}</h2>
        <button onClick={this.updateDomCount}>update dom count</button>
        <h2>Normal Count: {this.state.normalCount}</h2>
        <button onClick={this.updateNormalCount}>update normal count</button>
      </div>
    )
  }
}

export default Parent