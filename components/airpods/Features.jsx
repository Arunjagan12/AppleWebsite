import React, { useEffect, useRef } from 'react';
import { airpodH2 } from '../../utils';

const Features = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    // Function to handle intersection observer
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (video) {
            video.play();
          }
        } else {
          if (video) {
            video.pause();
          }
        }
      });
    };

    // Create an intersection observer instance
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Trigger when at least 50% of the video is visible
    });

    // Start observing the video element
    if (video) {
      observer.observe(video);
    }

    // Clean up observer on component unmount
    return () => {
      if (video) {
        observer.unobserve(video);
      }
    };
  }, []);

  return (
    <div className="text-white bg-black">
      <div className="lg:p-20 sm:p-4">
        <div className="mb-8 px-4 lg:px-16 text-left">
          <p className="text-5xl lg:text-3xl font-semibold mb-2">Audio performance</p>
          <h1 className="text-6xl lg:text-8xl font-bold text-left mb-4">H2. More immersive by every measure.</h1>
          <br />
          <p className="text-2xl lg:text-4xl font-semibold text-left">The Apple-designed H2 chip is the force behind the advanced audio performance of AirPods Pro, working with the driver and amplifier to create crisp, high-definition sound. It uses computational algorithms to deliver noise cancellation, superior three-dimensional sound and efficient battery life — all at once.</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row rounded-lg border border-gray-600">
        <div className="lg:w-1/2 p-4 border-b lg:border-b-0 lg:border-r border-gray-600 flex items-center justify-center">
          <video
            ref={videoRef}
            className="pointer-events-none h-96 object-cover rounded-lg"
            autoPlay
            muted
            playsInline
            preload="auto"
          >
            <source src={airpodH2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="lg:w-1/2 p-4 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-gray-600">
          <div className="text-left hiw-text">
            <p className="text-2xl"><span className='text-white'>The H2 chip</span> carries out more functions than ever, using <span className='text-green-500'>computational algorithms</span> to deliver even smarter noise cancellation, superior three-dimensional sound and more efficient battery life — all at once.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
