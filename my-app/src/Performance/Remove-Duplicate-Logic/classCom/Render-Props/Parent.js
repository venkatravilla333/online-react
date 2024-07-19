import React, { Component } from 'react'
import Render from './Render'
import Count1 from './Count1'
import Count2 from './Count2'
import Count3 from './Count3'

export class Parent extends Component {
  render() {
    return (
      <div>
        <h3>Parent</h3>
        <Render render={(count, increaseCount) => {
          return (
            <>
              <Count1 count={count} increaseCount={increaseCount} />
              {/* <Count2 count={count} increaseCount={increaseCount} />
              <Count3 count={count} increaseCount={increaseCount} /> */}
            </>
          ); 
        }} />
        <Render render={(count, increaseCount) => {
         return <Count2 count={count} increaseCount={increaseCount} />
        }} />
        <Render render={(count, increaseCount) => {
         return <Count3 count={count} increaseCount={increaseCount} />
        }} />
      </div>
    )
  }
}

export default Parent









