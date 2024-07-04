import React, { useState } from 'react'

function G(props) {
  console.log(props)
//  var [name] = useState('sachin')
  return (
    <div>G: {props.name}</div>
  )
}

export default G