import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { appleHome, explore1Img, caseFront, macHome, ipadPro } from '../utils';
import Navbar from "../components/iPhone/Navbar";
import Footer from "../components/iPhone/Footer";

const Home = () => {
  const productRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      productRefs.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
    );
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <Navbar />
      <div className="bg-black min-h-screen flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-lg">
          <div className="flex justify-center mb=4">
            <video className="pointer-events-none w-full h-auto" autoPlay muted loop playsInline key={appleHome}>
              <source src={appleHome} type="video/mp4" />
            </video>
          </div>
          <div className="text-center">
            <h2 className="text-white font-semibold text-3xl sm:text-2xl">
              See everything announced at the event
            </h2>
          </div>
        </div>
      </div>

      {/* Product Containers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
        {/* iPhone */}
        <Link
          to="/phone"
          ref={(el) => (productRefs.current[0] = el)}
          className="relative bg-black text-white p-4 rounded-lg flex flex-col items-center justify-end bg-cover bg-center h-96"
          style={{ backgroundImage: `url(${explore1Img})` }}
        >
          <h3 className="text-xl font-semibold mb-2">iPhone</h3>
          <div className="flex space-x-2">
            <button className="bg-blue-600 px-4 py-2 rounded-full">Learn more</button>
            <button className="bg-green-600 px-4 py-2 rounded-full">Buy</button>
          </div>
        </Link>

        {/* iPad */}
        <Link
          to="/ipad"
          ref={(el) => (productRefs.current[1] = el)}
          className="relative bg-gray-800 text-white p-4 rounded-lg flex flex-col items-center justify-end bg-cover bg-center h-96"
          style={{ backgroundImage: `url(${ipadPro})` }}
        >
          <h3 className="text-xl font-semibold mb-2">iPad</h3>
          <div className="flex space-x-2">
            <button className="bg-blue-600 px-4 py-2 rounded-full">Learn more</button>
            <button className="bg-green-600 px-4 py-2 rounded-full">Buy</button>
          </div>
        </Link>

        {/* MacBook */}
        <Link
          to="/mac"
          ref={(el) => (productRefs.current[2] = el)}
          className="relative bg-white text-black p-4 rounded-lg flex flex-col items-center justify-end bg-cover bg-center h-96"
          style={{ backgroundImage: `url(${macHome})` }}
        >
          <h3 className="text-xl font-semibold mb-2">MacBook</h3>
          <div className="flex space-x-2">
            <button className="bg-blue-600 px-4 py-2 rounded-full">Learn more</button>
            <button className="bg-green-600 px-4 py-2 rounded-full">Buy</button>
          </div>
        </Link>

        {/* AirPods */}
        <Link
          to="/airpods"
          ref={(el) => (productRefs.current[3] = el)}
          className="relative bg-black text-white p-4 rounded-lg flex flex-col items-center justify-end bg-cover bg-center h-96"
          style={{ backgroundImage: `url(${caseFront})` }}
        >
          <h3 className="text-xl font-semibold mb-2">AirPods</h3>
          <div className="flex space-x-2">
            <button className="bg-blue-600 px-4 py-2 rounded-full">Learn more</button>
            <button className="bg-green-600 px-4 py-2 rounded-full">Buy</button>
          </div>
        </Link>
      </div>
      <Footer />
    </section>
  );
};

export default Home;
