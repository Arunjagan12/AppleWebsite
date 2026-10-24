import React, { useRef, useEffect, useState } from 'react';
import { animateWithGsap } from '../../utils/animations';
import { videoEnd } from '../../utils';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';

const Features5 = () => {
  const videoRef = useRef(null);
  const [isVideoLoaded, setVideoLoaded] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && isVideoLoaded && !videoPlaying) {
      if (videoRef.current) {
        videoRef.current.play();
        setVideoPlaying(true);
      }
    } else if (!inView && videoPlaying) {
      if (videoRef.current) {
        videoRef.current.pause();
        setVideoPlaying(false);
      }
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
    <section className="h-full px-4 py-16 bg-white text-gray-800 relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center">
        <div className="flex flex-col items-center justify-center mt-16 lg:mt-32 mb-24">
          <h2 id="features_title" className="text-4xl lg:text-6xl font-bold text-center">The best display</h2>
          <h2 className="text-4xl lg:text-6xl font-bold text-center">ever in a laptop.</h2>
          <div className="w-full flex items-center justify-center flex-col mt-8" ref={ref}>
            <div className="w-full flex items-center justify-center relative">
              {isVideoLoaded && (
                <video
                  id="exploreVideo"
                  className="pointer-events-none w-full h-full"
                  autoPlay
                  muted
                  playsInline
                  key={videoEnd}
                  ref={videoRef}
                >
                  <source src={videoEnd} type="video/mp4" />
                </video>
              )}
            </div>
          </div>
          <br />
          <div className="mt-8 text-left">
            <p className='feature-text g-text'>
              <span className='text-black'>Extreme Dynamic Range</span>
              (XDR) brings refined specular highlights, incredible detail in shadows, and vibrant, true‑to‑life colours. Calibrated in the factory, each Liquid Retina XDR display also features
              <span className="text-black"> ProMotion</span> and <span className="text-black">pro reference modes</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features5;
