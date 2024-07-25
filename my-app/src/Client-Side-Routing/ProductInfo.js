import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

function ProductInfo() {
  var { id } = useParams()
  var location = useLocation()
  console.log(location)

  return (
    <div>
      <h4>Product Id: {JSON.stringify(location.state.id)}</h4> 
      <h4>Product name: {JSON.stringify(location.state.name)}</h4> 
      <h4>Product price: {JSON.stringify(location.state.price)}</h4> 
    </div>
  )
}

export default ProductInfo