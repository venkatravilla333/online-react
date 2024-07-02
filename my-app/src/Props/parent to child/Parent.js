import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

function Parent() {
  var name = 'sachin'
  return (
    <div>
      <h3>Parent com: {name}</h3>
      <Child1 name={name} />
      <Child2 name={name} />
    </div>
  )
}

export default Parent