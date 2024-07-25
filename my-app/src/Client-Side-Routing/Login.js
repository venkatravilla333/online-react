import React from 'react'

function Login() {
  return (
    <div style={{marginTop:'50px'}}>
      <form>
        <div>
        <label htmlFor="">name</label>
        <input type="text" />
        </div>
        <div>
        <label htmlFor="">email</label>
        <input type="email" />
        </div>
      </form>
    </div>
  )
}

export default Login