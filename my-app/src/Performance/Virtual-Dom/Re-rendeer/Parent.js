import React, { useState } from 'react'
import Child from './Child'

function Parent() {
 var [count, setCount] = useState(0)
  console.log('parent-render')

  var increaseCount = () => {
    setCount(count+1)
  }
  return (
    <div>
      <h1>Parent com : {count}</h1>
      <button onClick={increaseCount}>increase count</button>
      <Child/>
    </div>
  )
}

export default Parent