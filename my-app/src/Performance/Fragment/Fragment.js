import React from 'react'
import TableData from './TableData'

function Fragment() {
  return (
    <React.Fragment>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
            <th>ph</th>
          </tr>
        </thead>
          <tbody>
            <tr>
              <TableData/>
            </tr>
          </tbody>
      </table>
    </React.Fragment>
  )
//  return React.createElement('div', null, 'Hello')
}

export default Fragment