import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import Hero from './Hero';
import Highlights from './Highlights';
import Model from './Model';
import Features from './Features';
import Features2 from './Features2';
import Features3 from './Features3';
import Features4 from './Features4';
import Features5 from './Features5';
import { useEffect } from 'react';




const Mac = () => {
  useEffect(() => {
    document.title = 'Macbook Pro';
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
       <Navbar />
       <Hero />
       <Highlights />
       <Model />
       <Features />
       <Features2 />
       <Features3 />
       <Features4 />
       <Features5 />
       
       <Footer />
    </main>
  )
}

export default Mac;