import React from 'react';
import { caseFront, caseClosed, caseSide, caseBottom } from '../../utils';

const Casefront = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-8 lg:py-20">
      <img
        src={caseFront}
        alt="Example Image"
        className="w-auto h-auto mb-8 object-cover rounded-lg"
      />
      <div className="text-center">
        <p className="feature-text px-6">
          The <span className='text-green-500'>U1 chip</span> enables <span className='text-white'>Find My with Precision Finding<sup>7</sup></span> for your case, so you can locate it exactly. You can also use Find My with proximity view if you lose track of your AirPods Pro.
        </p>
      </div>
      <br />
      <br />
      <br />
      <img
        src={caseClosed}
        alt="Closed case"
        className="w-auto h-auto mb-8 object-cover lg:px-24 rounded-lg"
      />
       <br />
       <br />
       <br />
       <img
        src={caseSide}
        alt="Closed case"
        className="w-auto h-auto mb-8 object-cover lg:px-24 rounded-lg"
      />
      <div className="text-center">
        <p className="feature-text px-6">
       A <span className='text-white'>lanyard loop</span> allows you to attach the case to a backpack or handbag, so immersive sound is always within reach.
        </p>
      </div>
      <br />
      <br />
      <br />
      <img
        src={caseBottom}
        alt="Bottom case"
        className="w-auto h-auto mb-8 object-cover lg:px-24 rounded-lg"
      />
      <div className="text-center">
        <p className="feature-text px-6">
        The case’s <span className='text-white'>built‑in speaker</span> plays sound to help you easily locate it, and <span className='text-green-500'>alert tones</span> let you know when the battery is low or pairing is complete.
        </p>
      </div>
      <br />
      <br />
      <br />
      <img
        src={caseClosed}
        alt="Closed case"
        className="w-auto h-auto mb-8 object-cover lg:px-24 rounded-lg"
      />
      <div className="text-center">
        <p className="feature-text px-6">
        Both AirPods Pro and the MagSafe Charging Case<sup>4</sup> are <span className='text-white'>IP54 dust, sweat and water resistant</span>.
        </p>
      </div>
      
    </div>
  );
};

export default Casefront;
