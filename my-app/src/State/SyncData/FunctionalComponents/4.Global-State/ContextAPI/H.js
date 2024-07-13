import React, { useContext } from 'react'
import { countContext } from './A'

function H() {
  var [count, setCount] = useContext(countContext)
  return (
    <div>
      <h3>H: Count: {count}</h3>
      <button onClick={()=>setCount(count+1)}>update count</button>
    </div>
  )
}

export default H