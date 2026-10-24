import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { macHero, macSmall } from '../../utils';
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
    <section className="w-full min-h-screen bg-white text-gray-800 relative flex flex-col items-center justify-center">
      <div className="flex flex-col items-center text-center space-y-4 p-4 md:p-8">
        <p id="hero" className="font-semibold text-4xl opacity-0 max-md:mb-4 md:mb-6">MacBook Pro</p>
        <h2 className="text-4xl lg:text-6xl font-semibold mb-2">Mind-blowing.</h2>
        <h2 className="text-4xl lg:text-6xl font-semibold mb-6">Head-turning.</h2>
      </div>
      <div className="w-full flex justify-center mb-10">
        {isSmallScreen ? (
          <img src={macSmall} alt="Hero" className="pointer-events-none w-full max-w-md" />
        ) : (
          <video className="pointer-events-none w-full h-auto" autoPlay muted playsInline key={macHero}>
            <source src={macHero} type="video/mp4" />
          </video>
        )}
      </div>
      <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20 mt-10">
        <a href="#highlights" className="btn">Buy</a>
        <p className="font-normal text-xl mt-4">From ₹169900.00*</p>
      </div>
    </section>
  );
}

export default Hero;
