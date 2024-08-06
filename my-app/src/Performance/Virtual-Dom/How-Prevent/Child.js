import React from 'react'

function Child({count}) {
  console.log('child render')
  return (
    <h3>Child : {count}</h3>
  )
}

export default React.memo(Child)