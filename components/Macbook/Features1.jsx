import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { images } from './constants';

const Features1 = () => {
  const mainImageRef = useRef(null);
  const imageRefs = useRef(images.slice(1).map(() => React.createRef()));
  const textContainerRef = useRef(null);
  const [intersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    observer.observe(textContainerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (intersecting) {
      const mainImage = mainImageRef.current;
      const otherImages = imageRefs.current.map((ref) => ref.current);
      const textContainer = textContainerRef.current;

      // Animate the main image to scale up
      gsap.fromTo(
        mainImage,
        { scale: 0 },
        { scale: 1, duration: 1, ease: 'power2.inOut' }
      );

      // Define corner positions
      const positions = [
        { x: '-40vw', y: '-40vh' }, // Top left
        { x: '40vw', y: '-40vh' }, // Top right
        { x: '30vw', y: '-30vh' }, // Top right overlap
        { x: '-40vw', y: '0vh' }, // Left
        { x: '40vw', y: '0vh' }, // Right
        { x: '-40vw', y: '40vh' }, // Bottom left
        { x: '40vw', y: '40vh' }, // Bottom right
      ];

      // Animate the other images to move to corners
      gsap.fromTo(
        otherImages,
        { x: 0, y: 0, opacity: 0 },
        {
          x: (i) => positions[i].x,
          y: (i) => positions[i].y,
          opacity: 1,
          duration: 1,
          ease: 'power2.inOut',
          delay: 1,
          stagger: 0.1,
        }
      );

      // Animate text container to appear after images animation
      gsap.fromTo(
        textContainer,
        { opacity: 0 },
        { opacity: 1, duration: 1, delay: 2 }
      );
    }
  }, [intersecting]);

  return (
    <section className="h-screen w-screen bg-black relative overflow-hidden">
      <div className="absolute top-0 w-full text-center p-8 text-white">
        <h2 className="text-4xl lg:text-6xl font-bold">iPadOS and apps.</h2>
        <h2 className="text-4xl lg:text-6xl font-bold">Workflow workhorses.</h2>
      </div>

      <div className="border-t-2 border-white absolute top-0 w-full" />

      <div className="absolute inset-0 flex justify-center items-center">
        <div className="image-container absolute inset-0 flex justify-center items-center">
          <img
            src={images[0]}
            ref={mainImageRef}
            alt="Main Image"
            className="absolute z-10 w-1/2"
          />
          {images.slice(1).map((image, index) => (
            <img
              key={index}
              src={intersecting ? image : ''}
              ref={imageRefs.current[index]}
              alt={`Image ${index + 1}`}
              className="absolute w-1/6"
              style={{ zIndex: 5 - index }}
              loading="lazy"
            />
          ))}
        </div>
      </div>

      <div ref={textContainerRef} className="absolute bottom-0 w-full text-center p-8 text-white mt-20">
        <div className="flex flex-col w-full mt-4 p-4">
          <div className="feature-text-container">
            <div className="flex-1 flex justify-center">
              <p className="feature-text g_text text-lg lg:text-xl">
                iPadOS is designed to let you power through advanced workflows and{' '}
                <span className="text-white">do all the things you love</span> with ease and simplicity. Run pro apps, play high-performance games and take on creative projects of any size with an intuitive touch-first experience.
              </p>
            </div>

            <div className="flex-1 flex justify-center mt-4">
              <p className="feature-text g_text text-lg lg:text-xl">
                <span className="text-white">Shown above: </span>
                Stage Manager, Final Cut Pro for iPad, Procreate Dreams, Octane X, Logic Pro for iPad, Procreate, Freeform, Morpholio Trace, Photos, Shapr3D.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features1;
