import React, { useState } from 'react'

import {useDispatch, useSelector} from 'react-redux'
import { decreaseCount, increaseCount } from '../Redux/countActions'

function L() {
  //  var [name] = useState('sachin')
  
  var count = useSelector((state) => state.count)
  console.log(count)

 var dispatch = useDispatch()

  
  return (
    <div>
      <h4>L: {count}</h4>
      <button onClick={()=>dispatch(increaseCount())}>increase count</button>
      <button onClick={()=>dispatch(decreaseCount())}>decrease count</button>
    </div>
  );
}

export default L