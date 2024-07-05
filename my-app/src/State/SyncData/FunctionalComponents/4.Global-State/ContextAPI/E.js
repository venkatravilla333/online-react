import React from 'react'
import F from './F'
import G from './G'

function E(props) {
  // console.log(props)
  return (
    <div>
      <F />
      {/* <G name={props.name} /> */}
      <G />
    </div>
  )
}

export default E