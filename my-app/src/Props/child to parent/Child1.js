import React from 'react'

function Child1(props) {
  console.log(props)
  return (
    <div>
      <button onClick={()=> props.test('child data')}>button in child-1</button>
    </div>
  )
}

export default Child1