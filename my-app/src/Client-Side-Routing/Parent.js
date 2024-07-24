import React from 'react'
import './style.css'
import Home from './Home'
import About from './About'
import Products from './Products'
import {Routes, Route} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ProductInfo from './ProductInfo'
import PageNotFound from './PageNotFound'

function Parent() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/home' element={<Home/> } />
        <Route path='/about' element={<About/> } />
        <Route path='*' element={<PageNotFound/> } />
        <Route path='/products' element={<Products />} >
        <Route path=':id' element={<ProductInfo/> } />
        </Route>
      </Routes>
      <Footer/>
      
    </div>
  )
}

export default Parent