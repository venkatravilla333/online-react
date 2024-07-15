import React from 'react'

function Login(props) {
  // console.log(props)
  var { login, setLogin } = props.data
 
  return (
    <div>
      <button onClick={()=>setLogin(login=true)}>Login</button>
    </div>
  )
}

export default Login