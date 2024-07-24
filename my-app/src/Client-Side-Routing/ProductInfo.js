import React from 'react'
import { useParams } from 'react-router-dom'

function ProductInfo() {
  var { id } = useParams()
  return (
    <h2>ProductInfo {id}</h2>
  )
}

export default ProductInfo