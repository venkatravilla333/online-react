import React, { useContext, useState } from 'react'
import B from './B'
import C from './C'

//Create context value

export var nameContent = React.createContext('sachin')
export var ageContent = React.createContext(40)
console.log(nameContent)
// console.log(nameContent._currentValue)

function A() {

//  var [name] = useState('sachin')
  return (
    <div>
      {/* <B name={name} />
      <C name={name} /> */}
      <ageContent.Provider value={50}>
      <nameContent.Provider value='kohli'>
      <B />
      <C />
      </nameContent.Provider>
      </ageContent.Provider>
    </div>
  )
}

export default A