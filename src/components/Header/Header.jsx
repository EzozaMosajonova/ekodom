import React from 'react'
import { Navbar } from './Navbar/Navbar'
import "./Header.css"

const Header = () => {
  return (
    <div className='Header'>
      <Navbar />
      <div className='container'>
        <div className='Header_content'>
          <div className='Header_info'>
            <p className='Header_subtitle'>
              Свобода. Доступность. Уникальность
            </p>
            <h1 className='Header_title'>
              Построй дом
              своей мечты
            </h1>
            <p className='Header_subtitle'>
              Мы построим тот дом, о котором вы мечтаете
            </p>
            <button className='Header_button'>
              Построй свой дом
            </button>
          </div>
          <div className='Header_image'>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header