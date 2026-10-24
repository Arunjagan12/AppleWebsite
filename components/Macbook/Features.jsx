import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { animateWithGsap } from '../../utils/animations';
import { useInView } from 'react-intersection-observer';
import { features } from './constants';

const Features = () => {
  const { ref, inView } = useInView();
  const containerRef = useRef(null);

  useEffect(() => {
    animateWithGsap('#features_title', { y: 0, opacity: 1 });
    animateWithGsap('.g_grow', { scale: 1, opacity: 1, ease: 'power1' }, { scrub: 5.5 });
    animateWithGsap('.g_text', { y: 0, opacity: 1, ease: 'power2.inOut', duration: 1 });
  }, []);

  useEffect(() => {
    if (inView) {
      gsap.fromTo(
        ".feature-text",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
      );
    }
  }, [inView]);



  return (
    <section className="h-full px-4 py-16 bg-black relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <div className="mb-10 w-full text-center">
          <h1 id="features_title" className="section-heading text-left">Explore the full story.</h1>
        </div>

        <div className="flex flex-col items-center overflow-hidden">
          <div className="flex flex-col items-center mt-16 lg:mt-32 mb-24 px-4 lg:px-0">
            <h2 className="text-5xl lg:text-7xl font-semibold text-left">Three giant leaps.</h2>
            <div className='feature-text-container flex justify-center mb-10'>
              <div className="text-center">
                <p className="feature-text g_text text-lg lg:text-xl">
                MacBook Pro blasts forward with the M3, M3 Pro and M3 Max chips. Built on{' '}
                  <span className="text-white">3‑nanometre technology</span> and featuring an
                  <span className="text-white"> all-new GPU architecture</span>, they’re the most advanced chips ever built for a personal computer. And each one
                  <span className="text-white"> brings more pro performance and capability.</span>
                </p>
              </div>
            </div>

            <div className="w-full flex items-center justify-center flex-col relative" ref={ref}>
              <div className="grid grid-cols-3 gap-12 w-full max-w-4xl mx-auto mb-10 overflow-hidden" ref={containerRef}>
                {features[0].images.map((image, index) => (
                  <img key={index} src={image} alt={`Image ${index + 1}`} className="w-auto h-auto" />
                ))}

                {features.slice(1).map((row, rowIndex) => (
                  row.textLists.map((textItem, colIndex) => (
                    <div
                      key={`${rowIndex}-${colIndex}`}
                      className={`text-left font-bold text-lg lg:text-3xl ${
                        colIndex === 0 ? 'text-teal-400' : colIndex === 1 ? 'text-cyan-600' : 'text-purple-500'
                      }`}
                    >
                      <p>{textItem.text1}</p>
                      <p>{textItem.text2}</p>
                    </div>
                  ))
                ))}
              </div>
            </div>

          

          </div>
        </div>


      </div>
    </section>
  );
}

export default Features;
