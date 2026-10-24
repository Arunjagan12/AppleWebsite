import React, { useRef } from 'react';
import { ipad_chip_img, Ipad_display } from '../../utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { animateWithGsap } from '../../utils/animations';

const HowItWorks = () => {
  const chipRef = useRef();
  const imageRef = useRef();

  useGSAP(() => {
    gsap.from(chipRef.current, {
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut'
    });

    gsap.from(imageRef.current, {
      opacity: 0,
      x: '100px',
      duration: 1.5,
      ease: 'power2.out'
    });

    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut'
    });
  }, []);

  return (
    <section className="common-padding bg-black">
      <div className="screen-max-width">
        <div ref={chipRef} className="flex-center w-full my-20">
          <img src={ipad_chip_img} alt="chip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            Rocket chip.
            <br /> The Next-Gen of Apple silicon
          </h2>

          <p className="hiw-subtitle">
            M4 is built on second-generation 3-nanometre technology that’s even more power efficient and delivers all-day battery life.5 The CPU includes up to four performance cores and six efficiency cores for advanced tasks like instantly adding demanding effects to 4K video.
          </p>
        </div>

        <br />

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            Dream big.
            <br /> Connect fast.
          </h2>
          <img ref={imageRef} src={Ipad_display} alt="chip" className='w-full h-full lg:p-10 md:p-8 sm:p-5' />
        </div>

        <div className="hiw-text-container">
          <div className="flex flex-1 justify-left flex-col">
            <p className="hiw-text">
              Pro connectivity adds a whole new dimension of versatility to iPad Pro. {' '}
              <span className="text-white">
                Drive high-resolution external displays 
              </span> up to 6K and connect to storage devices with Thunderbolt. And stay connected wherever you are with blazing-fast Wi-Fi 6E and 5G capabilities.
            </p>
          </div>

          <div className="flex-1 flex justify-center flex-col">
            <p className="hiw-text">Up to</p>
            <p className="hiw-bigtext">40 Gbps</p>
            <p className="hiw-text">data transfer speeds</p>
            <br />
            <p className="hiw-bigtext">Wi-Fi 6E</p>
            <br />
            <p className="hiw-bigtext">5G</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
