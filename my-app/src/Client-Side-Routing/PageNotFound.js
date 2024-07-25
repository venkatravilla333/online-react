import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function PageNotFound() {
  var navigate = useNavigate()
  
  useEffect(() => {
    setTimeout(() => {
      navigate('/products')
    }, 2000)
  }, [])
  return (
    <h2>PageNotFound 404</h2>
  )
}

export default PageNotFound