import React from 'react'
import L from './L'
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../Redux/cake/cakeActions';

function K() {
  var cakeState = useSelector((state) => state.cakeReducer);
  var dispatch = useDispatch()
  return (
    <div>
      <h4>K: no of cakes: {cakeState.noOfCakes}</h4>
          <button onClick={() => dispatch(buyCake())}>buy cake</button>
      <L/>
    </div>
  )
}

export default K