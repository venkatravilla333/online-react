import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';

function Products() {
  var [products] = useState([
    { id: 1, name: 'Banana', price: 100 },
    { id: 2, name: 'Apple', price: 200 },
    { id: 3, name: 'Grape', price: 300 },
    { id: 4, name: 'Mango', price: 500 },
    { id: 5, name: 'Tamato', price: 600 },
    { id: 5, name: 'Potato', price: 700 },
  ])
  return (
    <div>
      <ul>
        {
          products.map((product) => {
          return <li>
             <Link state={product} to={`/products/${product.id}`}>{product.name}</Link>
             </li>
            
          })
        }
      </ul>
      <Outlet/>
    </div>
  );
}

export default Products