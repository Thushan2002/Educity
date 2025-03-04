import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Programs/Program'
import Title from './Components/Title/Title'
import About from './Components/About Us/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='OUR PROGRAM' title="what we offer"/>
        <Program/>
        <About/>
        <Title subTitle='Gallery' title="Campus Photos"/>
        <Campus/>
        <Title subTitle='TESTIMONIALS' title="What Students Says"/>
        <Testimonials/>
      </div>
    </div>
  )
}

export default App