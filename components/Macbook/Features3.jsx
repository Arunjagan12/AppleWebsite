import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';
import { macFrame, macFramevid1 } from '../../utils';

const Features3 = () => {
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

    gsap.fromTo('#features_title', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
    gsap.fromTo('.g_text', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.5 });
  }, []);

  return (
    <section className="h-full px-4 py-16 bg-black relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto">

        <div className="flex flex-col items-center overflow-hidden">
          <div className="flex flex-col items-center mt-16 lg:mt-32 mb-24 px-4 lg:px-0">
            <h2 className="text-5xl lg:text-8xl font-semibold text-left text-white">We can do this all day.</h2>
            <div className='feature-text-container flex justify-start mb-10 mt-4'>
              <div className="text-left">
                <p className="feature-text g_text text-lg lg:text-xl text-white">
                MacBook Pro has the{' '}
                  <span className="text-white">longest battery life ever in a Mac </span>
                  — up to 22 hours. That efficiency is the magic of Apple silicon. And all models remain just as fast whether plugged in or not. So wherever inspiration strikes or whenever duty calls, run with it.
                </p>
              </div>
            </div>

            <div className="relative flex items-center justify-center w-full lg:w-10/12" ref={ref}>
              <img
                src={macFrame}
                alt="MacBook Frame"
                className="relative -z-1 w-full"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <video
                  id="exploreVideo"
                  className="pointer-events-none z-1 w-fit"
                  autoPlay
                  muted
                  playsInline
                  ref={videoRef}
                  style={{ 
                    width: '82%',
                    height: '88%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: '1%',
                    left: '9%',
                  }}
                >
                  <source src={macFramevid1} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

          {/* New content container */}
          <div className="flex md:flex-row flex-col justify-between items-start gap-20">
          <div className="flex flex-1 justify-center flex-col">
            <p className="hiw-text">Up to</p>
            <p className="hiw-bigtext">22 hours</p>
            <p className="hiw-text">video playback</p>
          </div>

          <div className="flex-1 flex justify-center flex-col">
            <p className="hiw-text">Upto</p>
            <p className="hiw-bigtext">15 hours</p>
            <p className="hiw-text">wireless web browsing</p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Features3;
