import React from 'react'
import { About, Contact, Experience, Hero, Navbar, Tech, Works } from '../components'
import { Footer } from '../components/Footer'

const Portfolio = () => {
  return (
    <div className='relative z-0 bg-primary '>
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <Navbar />
      <Hero />
    </div>
    <About />
    <Experience />
    <Tech />
    <Works />
    <div className='relative z-0'>
      <Contact />
    </div>
    <Footer />
  </div>
)
}

export default Portfolio