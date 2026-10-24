import { useGSAP } from '@gsap/react';
import React, { useRef, useEffect, useState } from 'react';
import { animateWithGsap } from '../../utils/animations';
import { ipad_large } from '../../utils';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';

const Features = () => {
  const videoRef = useRef();
  const [isVideoLoaded, setVideoLoaded] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && isVideoLoaded && !videoPlaying) {
      videoRef.current.play();
      setVideoPlaying(true);
    } else if (!inView && videoPlaying) {
      videoRef.current.pause();
      setVideoPlaying(false);
    }
  }, [inView, isVideoLoaded, videoPlaying]);

  useEffect(() => {
    gsap.to('#exploreVideo', {
      scrollTrigger: {
        trigger: '#exploreVideo',
        toggleActions: 'play pause reverse restart',
        start: '-10% bottom',
      },
      onComplete: () => {
        setVideoLoaded(true);
      }
    });

    animateWithGsap('#features_title', { y: 0, opacity: 1 });
    animateWithGsap('.g_grow', { scale: 1, opacity: 1, ease: 'power1' }, { scrub: 5.5 });
    animateWithGsap('.g_text', { y: 0, opacity: 1, ease: 'power2.inOut', duration: 1 });
  }, []);

  return (
    <section className="h-full px-4 py-16 bg-black relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <div className="mb-10 w-full text-center">
          <h1 id="features_title" className="section-heading text-left">Explore the full story.</h1>
        </div>

        <div className="flex flex-col items-center overflow-hidden">
          <div className="flex flex-col items-center mt-16 lg:mt-32 mb-24 px-4 lg:px-0">
            <h2 className="text-3xl lg:text-5xl font-semibold text-center">Thrill. Sleeker.</h2>
            <div className='feature-text-container flex justify-center mb-10'>
              <div className="text-center">
                <p className="feature-text g_text text-lg lg:text-xl">
                  The all-new iPad Pro packs astonishing power into an unbelievably thin, light and portable design. Push the limits of what’s possible on iPad with a super-portable 11″ iPad Pro and an expansive 13″ iPad Pro that is{' '}
                  <span className="text-white">the thinnest product Apple has ever created.</span>
                </p>
              </div>
            </div>

            <div className="w-full flex items-center justify-center flex-col relative" ref={ref}>
              <div className="w-full lg:w-10/12 flex items-center justify-center relative">
                {isVideoLoaded && (
                  <video id="exploreVideo" className="pointer-events-none w-full" autoPlay muted playsInline key={ipad_large} ref={videoRef}>
                    <source src={ipad_large} type="video/mp4" />
                  </video>
                )}
                <div className="absolute lg:right-0 lg:mr-8 top-1/2 transform lg:-translate-y-1/2 flex flex-col items-end lg:items-center w-full lg:w-auto">
                  <div className="hidden lg:block text-right lg:text-center">
                    <h2 className="text-3xl lg:text-5xl font-semibold text-white">5.1 mm</h2>
                    <p className="text-gray-400 text-sm lg:text-base">thin and light design</p>
                  </div>
                </div>
              </div>
              <div className="lg:hidden mt-4 text-center">
                <h2 className="text-2xl font-semibold text-white">5.1 mm</h2>
                <p className="text-gray-400 text-base">thin and light design</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;



