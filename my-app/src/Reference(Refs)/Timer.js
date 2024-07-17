import React, { useEffect, useRef, useState } from 'react'

function Timer() {
  var [timer, setTimer] = useState(1)
  var countTimer = useRef()
  useEffect(() => {
   countTimer.current = setInterval(() => {
      setTimer(timer+1)
    }, 1000)
    return  ()=> {
      clearInterval(countTimer.current)
    }
  })
  return (
    <div>
      <h3>Timer: {timer}</h3>
      <button onClick={()=>clearInterval(countTimer.current)}>stop timer</button>
    </div>
  );
}

export default Timer