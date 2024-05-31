import React, { useState } from 'react'

import Header from './components/heroarea.jsx';
import About from './components/about.jsx';
import Resume from './components/resume.jsx';
import Portfolio from './components/portfolio.jsx';
import Services from './components/services.jsx';
import Testimonials from './components/testimonals.jsx';
import Contact from './components/contact.jsx';
import Footer from './components/footer.jsx';


function App() {

  return (
    <>
      <i className="bi bi-list mobile-nav-toggle d-lg-none"></i>
      <Header />
      <main id="main">
      <About />
      <Resume />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      </main>
    </>
  )
}

export default App
