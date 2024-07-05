import React, { useCallback, useContext, useState } from 'react'
import { ageContent, nameContent } from './A'

function L(props) {

  // var name = nameContent._currentValue
  var name = useContext(nameContent)
  var age = useContext(ageContent)
  // console.log(name)
  // console.log(props)
//  var [name] = useState('sachin')
  return (
    // <div>L: {props.name}</div>
    <div>L: name: {name}, age: {age}</div>
  )
}

export default L