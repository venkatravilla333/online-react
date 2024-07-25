import React from 'react'
import './style.css'
import Home from './Home'
// import About from './About'
import Products from './Products'
import {Routes, Route, useLocation} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ProductInfo from './ProductInfo'
import PageNotFound from './PageNotFound'
import Login from './Login'
import Loader from './Loader'
var LazyAbout = React.lazy(()=> import('./About'))

function Parent() {
 var location = useLocation()
  return (
    <div>
      {location.pathname != '/login' && <Header />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route
          path='/about'
          element={
            <React.Suspense fallback={<Loader/>}>
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/products' element={<Products />}>
          <Route path=':id' element={<ProductInfo />} />
        </Route>
      </Routes>
      {/* <Footer/> */}
      {location.pathname != '/login' && <Footer />}
    </div>
  );
}

export default Parent