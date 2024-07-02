import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

function Parent() {

var [x, setX] = useState(10)
  console.log(x)
  
  function test(data) {
    setX(data)
  }
  return (
    <div>
      <h4>Parent com: {x}</h4>
      <Child1 test={test} />
      <Child2 />
    </div>
  )
}

export default Parent