import React, { useEffect, useState } from 'react'

function RunsOnlyOnce() {
 var [x, setX] = useState(0)
  var [y, setY] = useState(0)
  
  var updateState = (e) => {
    console.log('update')
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    console.log('use effect')
    window.addEventListener('mousemove', updateState)
    return () => {
      console.log('clean up')
     window.removeEventListener('mousemove', updateState)
   }
  }, [])
  console.log('render')
  return (
    <div>
      <h2>X:{x }</h2>
      <h2>Y:{y }</h2>
    </div>
  )
}

export default RunsOnlyOnce