import React, { useCallback, useMemo, useState } from 'react'
import Child from './Child'

function Parent() {
   var [count, setCount] = useState(0)
  console.log('parent-render')

  var increaseCount = () => {
    setCount(count+1)
  }

  // var x = 100
  // var x = useMemo(() => 
  //  ({ value: 100 }) 
  // , []) 
  
  var x = useCallback(() => {
   return () => {};
  }, []) 
  
  return (
    <div>
      <h1>Parent com: {count}</h1>
      <button onClick={increaseCount}>increase count</button>
      {/* <Child count={count} /> */}
      {/* <Child x={{...x, age: 40}} /> */}
      <Child x={x} />
    </div>
  );
}

export default Parent