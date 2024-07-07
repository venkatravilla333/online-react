import React, { useState } from 'react'

import {useDispatch, useSelector} from 'react-redux'
import { buyCake } from '../toolkit/slices/cakeSlice/cakeSlice';
// import { decreaseCount, increaseCount } from '../Redux/count/countActions'
// import { buyCake } from '../Redux/cake/cakeActions'
// import { updateName } from '../Redux/user/userActions'


function L() {
  //  var [name] = useState('sachin')
  
  // var countState = useSelector((state) => state.countReducer)
  var cakeState = useSelector((state) => state.cakeReducer)
  // console.log(countState)
  // var userState = useSelector((state) => state.userReducer)
  // console.log(countState)

 var dispatch = useDispatch()

  
  return (
    <div>
      {/* <h4>L: count:  {countState.count}</h4>
      <button onClick={()=>dispatch(increaseCount())}>increase count</button>
      <button onClick={()=>dispatch(decreaseCount())}>decrease count</button> */}
      <h4>L: no of cakes: {cakeState.noOfCakes}</h4>
      <button onClick={() => dispatch(buyCake())}>buy cake</button>
      {/* <h3>user name :{userState.name} </h3>
      <button onClick={()=>dispatch(updateName())}>update user</button> */}
    </div>
  );
}

export default L