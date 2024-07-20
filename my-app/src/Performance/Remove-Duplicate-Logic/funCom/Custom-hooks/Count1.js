import React, { useState } from 'react'
import useCount from './useCount';

function Count1() {
  // var [count, setCount] = useState(0);

  // var increaseCount = () => {
  //   setCount(count+1)
  // }

  var [count, increaseCount] = useCount()
  
  return (
    <div>
      <h2>Count1: {count}</h2>
      <button onClick={increaseCount}>increase count</button>
    </div>
  );
}

export default Count1