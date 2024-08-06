import React from 'react'
import Child from './Child'

function Parent() {
  console.log('parent initial-render')
  return (
    <div>
      <h1>Parent com</h1>
      <Child/>
    </div>
  )
}

export default Parent