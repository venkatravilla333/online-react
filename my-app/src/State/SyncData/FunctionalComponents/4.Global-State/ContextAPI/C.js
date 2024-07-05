import React, { useContext } from 'react'
import H from './H'
import I from './I'
import { nameContent } from './A'

function C(props) {
  // console.log(props)
  return (
    <div>
      
      <H />
      {/* <I name={ props.name} /> */}
      <I/>
    </div>
  )
}

export default C