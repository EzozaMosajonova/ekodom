import React from 'react'
import "./Navbar.css"

export const Navbar = () => {
  return (
    <div className='container'>
      <div className='navbar_inner'>
        <div className='navbar_logo'>
          <a href="#">ЭкоДом</a>
        </div>
        <div className='navbar_menu'>
          <ul className='navbar_list'>
            <a href=""><li className=''>О компании</li></a>
            <a href=""><li>Строительство домов</li></a>
            <a href=""><li>Работы</li></a>
            <a href=""><li>Контакты</li></a>
          </ul>
        </div>
      </div>
    </div>
  )
}
