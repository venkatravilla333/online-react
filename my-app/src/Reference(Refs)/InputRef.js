import React, { useEffect, useRef, useState } from 'react'

function InputRef() {
 var [data, setData] = useState('sachin')
  var myRef = useRef(null)
  
  useEffect(() => {
    myRef.current.focus()
    console.log(myRef.current)
  }, [])

  var getValue = () => {
    console.log(myRef.current.value)
    setData(myRef.current.value);
  }
  return (
    <div className='hello'>
      <input type="text" ref={myRef} />
      <h3>Data: {data}</h3>
      <button onClick={getValue}>get value</button>
    </div>
  )
}

export default InputRef