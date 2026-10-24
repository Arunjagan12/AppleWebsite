import React from 'react';
import { batteryImg } from '../../utils';

const Features1 = () => {
  return (
    <div className="text-white bg-black">
      <div className="lg:px-80 md:px-16 sm:px-4 py-4">
        {/* Adjusted padding on different screen sizes */}
        <div className="mb-8 px-4 text-left">
          <p className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-2">Case and battery life</p>
          <h1 className="text-4xl md:text-7xl lg:text-9xl font-bold text-left mb-4">
            A case of unmistakable <span className="text-green-500">power.</span>
          </h1>
          <br />
          <p className="text-lg md:text-xl lg:text-2xl font-semibold text-left">
            The MagSafe Charging Case<sup>4</sup> is loaded with features that make listening on the move especially convenient. The case offers helpful ways to keep track of its location, and extended battery life lets you listen, watch and talk longer between charges. You won’t find a more capable case.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row rounded-lg border border-gray-600">
        <div className="lg:w-1/2 p-4 md:p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-gray-600 flex items-center justify-center">
          {/* Adjusted padding here */}
          <div className="text-center px-4">
            <p className="text-xl md:text-2xl lg:text-3xl mb-6 font-semibold py-4">
              Up to<br />
              <span className="text-5xl md:text-6xl lg:text-7xl">
                <span className="text-green-500 text-6xl md:text-7xl lg:text-8xl">6</span> hours
              </span>
              <br />
              of listening time with<br />
              Active Noise Cancellation enabled
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl mb-6 py-4 font-semibold">
              Up to<br />
              <span className="text-5xl md:text-6xl lg:text-7xl">
                <span className="text-green-500 text-6xl md:text-7xl lg:text-8xl">30</span> hours
              </span>
              <br />
              of total listening time with<br />
              Active Noise Cancellation enabled,<br />
              using the case.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 p-4 md:p-6 lg:p-8 flex flex-col items-center justify-center border-t lg:border-t-0 lg:border-l border-gray-600">
          {/* Adjusted padding here */}
          <div className="text-center hiw-text lg:p-8 mb-6">
            <p className="text-md md:text-lg lg:text-xl font-bold">
              Recharge the <span className="text-white">MagSafe Charging Case<sup>4</sup></span> with an <span className="text-green-500">USB‑C connector, Apple Watch charger or MagSafe charger</span>. You can also use a Qi‑certified charger.
            </p>
          </div>
          <img
            src={batteryImg}
            alt="Product Image"
            className="w-full h-auto max-w-xs object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Features1;
