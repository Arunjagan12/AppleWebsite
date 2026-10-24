import React from 'react'
import Navbar from '../iPhone/Navbar'
import Footer from '../iPhone/Footer'
import Hero from './Hero'
import Highlights from './Highlights'
import Model from './Model';
import Features from './Features';
import Features1 from './Features1'
import Features2 from './Features2';
import Pencil from './Pencil'
import HowItWorks from './HowItWorks'
import { useEffect } from 'react'


const IPad = () => {
  useEffect(() => {
    document.title = 'iPad Pro';
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
       <Navbar />
       <Hero />
       <Highlights />
       <Model />
       <Features />
       <Features1 />
       <Features2 />
       <Pencil />
       <HowItWorks />
       <Footer />
    </main>
  )
}

export default IPad;