import React, { useContext } from 'react'
import L from './L'
import { countContext } from './A';

function K(props) {
  // console.log(props)
  var [count] = useContext(countContext);
  return (
    <div>
      {/* <L name={props.name} /> */}
      <h3>K: {count}</h3>
      <L/>
    </div>
  )
}

export default K