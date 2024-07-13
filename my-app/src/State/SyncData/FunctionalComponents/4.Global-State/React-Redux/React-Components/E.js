import React from 'react'
import F from './F'
import G from './G'
import {useDispatch, useSelector} from 'react-redux'
import { buyCake } from '../Redux/cake/cakeActions'

function E() {
  var dispatch = useDispatch()
  var cakeState = useSelector((state) => state.cakeReducer)
  return (
    <div>
      <h3>E: {cakeState.noOfCakes}</h3>
      <button onClick={()=>dispatch(buyCake())}>Buy cake from E component</button>
      <F />
      <G />
    </div>
  )
}

export default E