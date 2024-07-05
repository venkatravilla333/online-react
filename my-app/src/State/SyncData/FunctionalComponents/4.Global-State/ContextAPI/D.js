import React, { useState, useContext } from 'react'
import { nameContent } from './A'

function D(props) {
  // console.log(props)

  //  var [name] = useState('sachin')
  //  var name = nameContent._currentValue
  var name = useContext(nameContent);
  
  return (
    // <div>D: {props.name} </div>
    <div>D: {name}</div>
  )
}

export default D