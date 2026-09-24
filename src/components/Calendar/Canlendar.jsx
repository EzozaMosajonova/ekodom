import React from 'react'
import "./Calendar.css"
import CalendarImg from "../../assets/Calendar.png"
import IphoneImg from "../../assets/Iphone.png"
import LandingPage from "../../assets/landingpage.png"



const Canlendar = () => {
  return (
    <div className='calendar'>
      <div className='calendar_text'>
        <h1>Свобода</h1>
        <h2>Уникальность</h2>
        <h3>Доступность</h3>
      </div>
      <div className='container'>
        <div className='calendar_box'>
          <img src={CalendarImg} alt="" />
          <img src={IphoneImg} alt="" />
          <img src={LandingPage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Canlendar