import React from 'react'
import Navbar from '../iPhone/Navbar'
import Footer from '../iPhone/Footer'
import Hero from './Hero';
import Model from './Model';
import Features from './Features';
import Features1 from './Features1'

import Hero1 from './Hero1'
import Hero2 from './Hero2';
import Casefront from './Casefront';
import { useEffect } from 'react';


const Airpods = () => {
  useEffect(() => {
    document.title = 'Airpods Pro';
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
       <Navbar />
       <Hero />
       <Hero1 />
       <Model />
       <Features />
       <Hero2 />
       <Features1 />
       <Casefront />
       <Footer />
    </main>
  )
}

export default Airpods;