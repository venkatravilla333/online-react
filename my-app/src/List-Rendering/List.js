import React from 'react'

function List() {

  var names = ['sachin', 'kohli', 'rahul', 'dhoni', 'gill', 'kohli']
  return (
    <div>
      <h3>Crickter Names</h3>
      {/* <h4>{names[0]}</h4>
      <h4>{names[1]}</h4>
      <h4>{names[2]}</h4>
      <h4>{names[3]}</h4>
      <h4>{names[4]}</h4> */}
      

      {
        names.map((name, index) => {
        return  <h4 key={index}>{name}</h4>
        })
      }
    </div>
  )
}

export default List