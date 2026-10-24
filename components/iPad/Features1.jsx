import React, { useRef, useEffect, useState } from 'react';
import { animateWithGsap } from '../../utils/animations';
import { ipad_ultra } from '../../utils';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';

const Features1 = () => {
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
    animateWithGsap('.g_text', { y: 0, opacity: 1, ease: 'power2.inOut', duration: 1 });
  }, []);

  return (
    <section className="h-full px-4 py-16 bg-black relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center">
        <div className="flex flex-col items-center justify-center mt-16 lg:mt-32 mb-24">
          <h2 id="features_title" className="text-4xl lg:text-6xl font-bold text-center">The world’s most</h2>
          <h2 className="text-4xl lg:text-6xl font-bold text-center">advanced display</h2>
          <div className="w-full flex items-center justify-center flex-col mt-8" ref={ref}>
            <div className="w-full md:w-10/12 flex items-center justify-center relative">
              {isVideoLoaded && (
                <video id="exploreVideo" className="pointer-events-none w-full" autoPlay muted playsInline key={ipad_ultra} ref={videoRef}>
                  <source src={ipad_ultra} type="video/mp4" />
                </video>
              )}
            </div>
          </div>
          <br />
          <div className="mt-8 text-center">
            <p className='feature-text g-text'>
              The new Ultra Retina XDR display introduces groundbreaking tandem OLED technology. Extreme brightness, incredibly precise contrast and advanced technologies like ProMotion and True Tone give you{' '}
              <span className="text-white">a jaw-dropping visual experience</span>. And you can use Reference Mode for colour-accurate workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features1;
