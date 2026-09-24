import React from 'react'
import "./About.css"
import AboutImg from "../../assets/AboutImg.png"

const About = () => {
  return (
    <div className='about'>
      <div className='container'>
        <div className='about_content'>
          <div className='about_menu'>
            <p>О компании</p>
            <small>Руководство</small>
            <small>Почему мы?</small>
          </div>
          <div className='about_title'>
            <h2>Липецкая компания "ЭкоДом"</h2>
          </div>
          <div className='about_info'>
            <div className='about_image'>
              <img src={AboutImg} alt="EcoDom" />
            </div>
            <div className='about_text'>
              <p className='about_text'>
                В зависимости от пожеланий клиентов, мы можем построить дом
                любой сложности как по уже готовым, так и по индивидуальным
                проектам, разработку которых наши специалисты также предоставляют.
              </p>
              <p>
                работает в сфере строительства уже более 13 лет. На данный
                момент более 500 семей стали обладателями собственных домов
                благодаря нашей компании. За это время у нас накопился
                значительный опыт в работе эффективного и надежного
                строительства домов, что вызывает доверие у наших текущих
                и будущих клиентов.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About