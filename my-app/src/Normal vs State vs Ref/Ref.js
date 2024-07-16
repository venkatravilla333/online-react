import React, { useRef, useState } from 'react'

function Ref() {
  var normalVariable = 0
  var [stateVariable, setStateVariable] = useState(0)
  var refVariable = useRef(0)
  

  var updateNv = () => {
    normalVariable++
    console.log(normalVariable)
  }
  var updateSv = () => {
    setStateVariable(stateVariable+1)
    console.log(stateVariable)
  }
  var updateRv = () => {
    refVariable.current++
    console.log(refVariable.current)
  }
  return (
    <div>
      <h3>Normal variable: {normalVariable}</h3>
      <h3>State variable: {stateVariable}</h3>
      <h3>Ref variable: {refVariable.current}</h3>
      <button onClick={updateNv}>update Nv</button>
      <button onClick={updateSv}>update Sv</button>
      <button onClick={updateRv}>update Rv</button>
    </div>
  )
}

export default Ref