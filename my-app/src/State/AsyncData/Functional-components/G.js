import React, { useState } from 'react'

function G() {
 var [name] = useState('sachin')
  return (
    <div>G: {name}</div>
  )
}

export default G