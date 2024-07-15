import React from 'react'

function Profile(props) {
  var {login, setLogin} = props.data
  return (
    <div>
      <h4>This Profile component</h4>
      <button onClick={()=>setLogin(login = false)}>Logout</button>
    </div>
  );
}

export default Profile