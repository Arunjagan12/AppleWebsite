import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ipad_hero_video, ipad_hero_img } from '../../utils'; // Ensure you have the smallHeroImage in your utils
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 760);

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 760);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 2 });
    gsap.to('#cta', { opacity: 1, y: -50, delay: 2 });
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <div className="md:w-10/12 w-9/12">
          {isSmallScreen ? (
            <img src={ipad_hero_img} alt="Hero" className="pointer-events-none" />
          ) : (
            <video className="pointer-events-none" autoPlay muted playsInline key={ipad_hero_video}>
              <source src={ipad_hero_video} type="video/mp4" />
            </video>
          )}
        </div>
      </div>
<br />
      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">Buy</a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;