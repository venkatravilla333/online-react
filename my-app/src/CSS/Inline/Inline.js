import React from 'react'

var obj = {color:'red', background:'yellow', width:'300px'}

function Hello() {
  return (
    <div style={obj}>Inline</div>
  )
}

export default Hello