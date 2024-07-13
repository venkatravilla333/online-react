import React, { useContext, useState } from 'react'
import B from './B'
import C from './C'

//Create context value

export var nameContent = React.createContext('sachin')
export var ageContent = React.createContext(40)
export var countContext = React.createContext()
// console.log(nameContent)
// console.log(nameContent._currentValue)

function A() {

 var [count, setCount] = useState(0)
  return (
    <div>
      {/* <B name={name} />
      <C name={name} /> */}
      <countContext.Provider value={[count, setCount]}>
      <ageContent.Provider value={50}>
      <nameContent.Provider value='kohli'>
      <B />
      <C />
      </nameContent.Provider>
      </ageContent.Provider>
      </countContext.Provider>
    </div>
  )
}

export default A