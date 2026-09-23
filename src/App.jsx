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

const App = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <About />
        <Estimate />
        <Canlendar />
        <Question />
        <Category />
        <Footer />
      </div>
    </>
  )
}

export default App