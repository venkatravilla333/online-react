import React, { useState } from 'react'
import RunsOnlyOnce from './RunsOnlyOnce'

function Container() {
 var [display, setDisplay] = useState(true)
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
      {display && <RunsOnlyOnce/>}
    </div>
  )
}

export default Container