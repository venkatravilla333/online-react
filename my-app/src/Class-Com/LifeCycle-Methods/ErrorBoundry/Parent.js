import React, { Component } from 'react'
import Child from './Child'
import ErrorBroundry from './ErrorBroundry'

export class Parent extends Component {
  render() {
    return (
      <div>
        <ErrorBroundry>
        <Child name ='sachin'/>
        </ErrorBroundry>
        <ErrorBroundry>
        <Child name ='raju'/>
        </ErrorBroundry>
        <ErrorBroundry>
        <Child name ='naveen'/>
        </ErrorBroundry>
      </div>
    )
  }
}

export default Parent