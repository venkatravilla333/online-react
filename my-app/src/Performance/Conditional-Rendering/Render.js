

import React, { useState } from 'react'
import Login from './Login'
import Profile from './Profile'

function Render() {
  var [login, setLogin] = useState(false)
  
  // if else
 
//   if (login) {
//     return <Profile data={{login, setLogin}} />
//   } else {
//     return <Login data={{login, setLogin}
// } />
  //   }

  // element variable 
  
//   var message 
//   if (login) {
//     message = <Profile data={{login, setLogin}} />
//   } else {
//    message = <Login data={{login, setLogin}
// } />
//   }
//   return message
  
  //ternary operator

  return (
    login ? <Profile data={{ login, setLogin }} /> : <Login data={{login, setLogin}} />
  )

  //short circuit

  // return (
  //   login && <Profile data={{ login, setLogin }} /> 
  // )
  

  
}

export default Render