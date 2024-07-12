import React, {useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../toolkit/slices/productSlice'

function D() {
  var productsState = useSelector((state) => state.productReducer)
  console.log(productsState)
  
 var dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])
  return (
    <div>
      <h3>D: component</h3>
      {productsState.loading ? <h3>Loading</h3> : productsState.error ? <h3>{productsState.error}</h3> : 
        <div>
          {
            productsState.products.map((obj) => {
              return <p>{obj.id}. {obj.title}</p>
            })
          }
       </div>
      }

    </div>
  )
}

export default D