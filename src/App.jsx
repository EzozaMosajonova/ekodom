import React from 'react'
import { Navbar } from './components/Header/Navbar/Navbar'
import Header from './components/Header/Header'
import About from './components/About/About'
import Estimate from './components/Estimate/Estimate'
import Canlendar from './components/Calendar/Canlendar'
import Question from './components/Question/Question'
import Category from './components/Category/Category'
import Footer from './components/Footer/Footer'
import "./App.css"
// import Mustaqil from './components/mustaqil/mustaqil'

const App = () => {
  return (
    <>
      <Header />
      <About />
      <div className='container'>
        <Estimate />
        {/* <Mustaqil/> */}
        <Canlendar />
        <Question />
        <Category />
        <Footer />
      </div>
    </>
  )
}

export default App