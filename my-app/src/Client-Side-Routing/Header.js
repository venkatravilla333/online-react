import React from 'react'

import './style.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <ul>
        <li>
          <Link to='/home'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/products'>Products</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header