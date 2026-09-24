import React from 'react'
import "./Estimate.css"
import EstimateImg from "../../assets/landing.png"

const Estimate = () => {
  return (
    <div className='estimate'>
      <div className='container'>
        <div className='estimate_content'>
          <div className='estimate_menu'>
            <p>Чёткая смета</p>
            <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in </small>
          </div>
          <div className='estimate_image'>
            <img src={EstimateImg} alt="EcoDom" />
          </div>
          <div className='estimate_info'>
            <div className='estimate_text'>
              <h3 className='estimate_text_title'>
                Проект дома
              </h3>
              <p className='estimate_text_desc'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Estimate