import React, { useRef, useEffect, useState } from 'react';
import { animateWithGsap } from '../../utils/animations';
import { ipad_frame_vid } from '../../utils';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';

const Features2 = () => {
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
    <section className="h-full common-padding bg-black relative overflow-hidden">
      <div className="screen-max-wdith">
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-32 mb-12 pl-24">
            <h2 id="features_title" className="text-4xl lg:text-6xl font-bold text-left">iPadOS and apps.</h2>
            <h2 className="text-4xl lg:text-6xl font-bold text-left">Workflow workhorses.</h2>
          </div>

          <div className="w-full md:w-10/12 flex items-center justify-center relative" ref={ref}>
            {isVideoLoaded && (
              <video id="exploreVideo" className="pointer-events-none w-full" autoPlay muted playsInline key={ipad_frame_vid} ref={videoRef}>
                <source src={ipad_frame_vid} type="video/mp4" />
              </video>
            )}
          </div>

          <div className="flex flex-col w-full mt-4">
            <div className="feature-text-container">
              <div className="flex-1 flex-center">
                <p className="feature-text g_text">
                  iPadOS is designed to let you power through advanced workflows and{' '}
                  <span className="text-white">
                    do all the things you love
                  </span> with ease and simplicity. Run pro apps, play high-performance games and take on creative projects of any size with an intuitive touch-first experience.
                </p>
              </div>

              <div className="flex-1 flex-center">
                <p className="feature-text g_text">
                  <span className="text-white">
                    Shown above: 
                  </span> Stage Manager, Final Cut Pro for iPad, Procreate Dreams, Octane X, Logic Pro for iPad, Procreate, Freeform, Morpholio Trace, Photos, Shapr3D.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features2;

