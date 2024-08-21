import React, { useEffect, useState } from 'react'

function Parent() {
 var [domCount, setDomCount]= useState(0)
 var [normalCount, setNormalCount] =  useState(100)

  var updateDomCount = () => {
    setDomCount(domCount+1)
  }

  var updateNormalCount = () => {
    setNormalCount(normalCount+1)
  }

  useEffect(() => {
    console.log('use effect')
    document.title = `${domCount}`
  }, [domCount])
  console.log('render')
  return (
    <div>
      <h2>Dom count: {domCount}</h2>
      <button onClick={updateDomCount}>update Dom count</button>
      <h2>Normal count: {normalCount}</h2>
      <button onClick={updateNormalCount}>update normal count</button>
    </div>
  )
}

export default Parent