import React, { useMemo, useState } from 'react'

function Heavy() {
  var [count, setCount] = useState(0)
  var [num, setNum] = useState(10)
  var factResult = useMemo(() => {
  return calFactorial(num);
 }, [num]) 
  var increaseCount = () => {
    setCount(count+1)
  }
  var increaseNum = () => {
    setNum(num+1)
  }

  function calFactorial(num) {
    var factorialRes = 1
    for (var i = num; i >= 1; i--){
      factorialRes = factorialRes*i
    }
    console.log('factorial calculation')
    return factorialRes
  }

  console.log('render')
  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={increaseCount}>increase count</button>
      <h2>Factorial value: {factResult }</h2>
      <button onClick={increaseNum}>increase num</button>
    </div>
  )
}

export default Heavy