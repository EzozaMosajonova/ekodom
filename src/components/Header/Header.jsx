import React from 'react'
import { Navbar } from './Navbar/Navbar'
import "./Header.css"

const Header = () => {
  return (
    <div className='Header'>
      <Navbar/>
      <div className='container'>
        header
      </div>
    </div>
  )
}

export default Header