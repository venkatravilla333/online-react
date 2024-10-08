import React from 'react'

import './style.css'
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <ul>
        <li>
          <NavLink to='/home'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/about' style={({isActive}) => {
            return isActive ? {color:'yellow'} : {color:'red'}
          }}>About</NavLink>
        </li>
        <li>
          <NavLink to='/products'>Products</NavLink>
        </li>
        <li>
          <NavLink to='/login'>Login</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header