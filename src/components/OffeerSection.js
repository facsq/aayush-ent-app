import React from 'react';
import cardImage1 from '../assets/card-image1.png';
import cardImage2 from '../assets/card-image2.png';
import customImage1 from '../assets/camera.png';
import customImage2 from '../assets/solar.png';

const OfferSection = () => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-8 text-siteblue">WHAT WE OFFER?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 2xl:mx-72">
        <div className="relative overflow-hidden drop-shadow-md bg-white rounded-2xl hover:drop-shadow-2xl duration-500">
            <img src={cardImage1} alt="Card 2" className="w-full h-96 sm:h-80 md:h-96 object-cover rounded-t-2xl 2xl:h-[28rem]" />
            
            <div className="p-6 2xl:pb-12 absolute bottom-0 left-0 right-0 bg-white rounded-2xl">
              <img src={customImage2} alt="camera" className="w-8 h-8 mx-auto mb-3" />
              <h3 className="text-2xl font-semibold text-siteblue mb-2 text-center">Solar Solutions</h3>
              <p className="text-siteblue text-base font-light text-center pb-2 ">Illuminating Your Path to <br />Sustainable Living</p>
              <button className="text-siteblue bg-transparent border border-siteblue font-regular text-sm py-1 px-3 rounded-full mt-4 mx-auto block transition-colors duration-300 hover:bg-siteblue hover:text-white">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative overflow-hidden drop-shadow-md bg-white rounded-2xl hover:drop-shadow-2xl duration-500">
            <img src={cardImage2} alt="Card 2" className="w-full h-96 sm:h-80 md:h-96 object-cover rounded-t-2xl 2xl:h-[28rem]" />
            
            <div className="p-6 2xl:pb-12 absolute bottom-0 left-0 right-0 bg-white rounded-2xl">
              <img src={customImage1} alt="camera" className="w-8 h-8 mx-auto mb-3" />
              <h3 className="text-2xl font-semibold text-siteblue mb-2 text-center">Security Solutions</h3>
              <p className="text-siteblue text-base font-light text-center pb-2">Watchful Eyes, <br /> Unparalleled Security</p>
              <button className="text-siteblue bg-transparent border border-siteblue font-regular text-sm py-1 px-3 rounded-full mt-4 mx-auto block transition-colors duration-300 hover:bg-siteblue hover:text-white">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <p className="text-siteblue text-center text-lg px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-12">
          Welcome to Aayush Enterprises, your one-stop solution for solar and security needs. Whether you need to power your home, business, or remote site with clean and reliable solar energy, or protect your assets with advanced and integrated security systems, we have the right solution for you.
        </p>
      </div>
    </section>
  );
};

export default OfferSection;
