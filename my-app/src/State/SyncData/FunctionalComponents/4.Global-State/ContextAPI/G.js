import React, { useContext, useState } from 'react'
import { nameContent } from './A'

function G(props) {
  // console.log(props)
  //  var [name] = useState('sachin')
  //  var name = nameContent._currentValue
  var name = useContext(nameContent);
  
  return (
    // <div>G: {props.name}</div>
    <div>G: {name}</div>
  )
}

export default G