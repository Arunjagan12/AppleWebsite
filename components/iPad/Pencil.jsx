import React, { useRef, useEffect, useState } from 'react';
import { animateWithGsap } from '../../utils/animations';
import { Ipad_Pencil } from '../../utils';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Pencil = () => {
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
      <div className="screen-max-width">
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="flex flex-col items-center justify-center mt-16 lg:mt-32 mb-24 pl-24" ref={ref}>
            <h1 className="text-4xl lg:text-6xl font-semibold text-center">Apple Pencil Pro.</h1>
            <h1 className="text-4xl lg:text-6xl font-semibold text-center">Engineered for</h1>
            <h1 className="text-4xl lg:text-6xl font-semibold text-center">limitless creativity.</h1>
            <br />
            <div className="md:w-10/12 w-9/12 flex items-center justify-center relative">
              {isVideoLoaded && (
                <video
                  id="exploreVideo"
                  className="pointer-events-none w-full"
                  autoPlay
                  muted
                  playsInline
                  key={Ipad_Pencil}
                  ref={videoRef}
                >
                  <source src={Ipad_Pencil} type="video/mp4" />
                </video>
              )}
            </div>
            <div className="feature-text-container flex justify-center mb-10">
              <div>
                <p className="feature-text g_text text-center">
                  Apple Pencil sets the standard for how drawing, painting, handwriting, and note-taking should feel — intuitive, precise, and magical. All with pixel‑perfect precision, low latency, tilt sensitivity, and support for palm rejection. The{' '}
                  <span className="text-white">
                    all-new Apple Pencil Pro
                  </span> adds even more capabilities to bring your ideas to life like never before.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pencil;
