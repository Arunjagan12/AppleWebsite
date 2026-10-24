import React, { useState, useRef, useEffect } from 'react';
import { carouselData } from './constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Features4 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleStartIndex, setVisibleStartIndex] = useState(0);
  const sliderRef = useRef(null);

  const handleNext = () => {
    if (visibleStartIndex + 1 < carouselData.length) {
      setVisibleStartIndex(visibleStartIndex + 1);
    }
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  const handlePrev = () => {
    if (visibleStartIndex > 0) {
      setVisibleStartIndex(visibleStartIndex - 1);
    }
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length);
  };

  const handleSelect = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    gsap.to(sliderRef.current, {
      x: `-${100 * currentIndex}%`,
      duration: 1.5,
      ease: 'power2.inOut',
    });
  }, [currentIndex]);

  useEffect(() => {
    gsap.fromTo(
      '.carousel-img',
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: '.carousel-img' } }
    );

    gsap.fromTo(
      '.carousel-text',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: 'power2.out', scrollTrigger: { trigger: '.carousel-text' } }
    );
  }, [currentIndex]);

  return (
    <section className="h-full px-4 py-16 bg-black relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-left justify-center mb-16">
          <h2 className="text-5xl lg:text-8xl font-semibold text-left text-white mb-6">Amps up apps.</h2>
          <br />
          <p className="feature-text g_text text-lg lg:text-xl text-white mt-4">
            With thousands of apps optimised to unlock the full power of macOS and Apple silicon,
            <span className="text-white"> M3 chips accelerate performance </span>
            like never before. Now apps just soar — from your go-to productivity apps to your favourite games and hardest-working pro apps.
          </p>
        </div>

        <div className="relative flex items-center justify-center w-full lg:w-10/12 mx-auto mb-10 overflow-hidden carousel-container">
          <div className="flex transition-transform duration-700 ease-in-out carousel-inner" ref={sliderRef}>
            {carouselData.map((item, index) => (
              <div key={index} className="carousel-item">
                <img
                  src={item.imgSrc}
                  alt={item.name}
                  className="carousel-img relative w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex justify-center items-center mb-16">
          {visibleStartIndex > 0 && (
            <button
              onClick={handlePrev}
              className="nav-button mx-4"
            >
              {'<'}
            </button>
          )}
          <div className="relative flex items-center slider-bar">
            {carouselData.slice(visibleStartIndex, visibleStartIndex + 4).map((item, index) => (
              <span
                key={index + visibleStartIndex}
                className={`slider-item ${currentIndex === index + visibleStartIndex ? 'active' : ''}`}
                onClick={() => handleSelect(index + visibleStartIndex)}
              >
                {item.name}
              </span>
            ))}
          </div>
          {visibleStartIndex + 4 < carouselData.length && (
            <button
              onClick={handleNext}
              className="nav-button mx-4"
            >
              {'>'}
            </button>
          )}
        </div>

        <div className="text-center">
          <p className="carousel-text feature-text g_text text-lg lg:text-xl text-white mx-auto max-w-screen-md">
            {carouselData[currentIndex].description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features4;
