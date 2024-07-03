import React, { useState } from 'react'

function A() {
  var [x, setX] = useState(100)
  // var x = 100
 
  console.log('render')


  return (
    <div>
      <h3>A: {x}</h3>
      <button onClick={()=>setX(x++)}>update state</button>
    </div>
  );
}

export default A



