import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import Hero from './Hero';
import Highlights from './Highlights';
import Model from './Model';
import Features from './Features';
import HowItWorks from './HowItWorks';
import { useEffect } from 'react';
const Phone = () => {
  useEffect(() => {
    document.title = 'iPhone 15';
    window.scrollTo(0, 0);
  }, []);
  return (
    
    <main>
        <Navbar />
        <Hero />
        <Highlights />
        <Model />
        <Features />
        <HowItWorks />
        <Footer />
    </main>
  )
}

export default Phone;