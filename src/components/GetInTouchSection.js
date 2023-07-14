import React from 'react';
import mapImage from '../assets/maps.png';
import addressIcon from '../assets/address.png';
import emailIcon from '../assets/email.png';
import phoneIcon from '../assets/phone.png';

const GetInTouchSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl text-center font-bold text-siteblue mb-8">GET IN TOUCH!</h2>
        <div className="bg-white drop-shadow-2xl rounded-3xl flex flex-col md:flex-row items-center md:items-start py-8 px-6 sm:px-8 md:px-12 lg:px-16 lg:mx-40">
          <div className="md:w-1/2 sm:p-3 xs:p-3 p-3 2xl:p-8">
            <img src={mapImage} alt="Maps" className="w-full h-auto" />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 2xl:pl-12 2xl:pt-12">
            <div className="flex flex-col space-y-8 pl-4 md:pl-10">
              <div className="flex items-center">
                <img src={addressIcon} alt="Address" className="w-8 h-8 mr-4" />
                <p className="text-xl text-black">Bhopal, Madhya Pradesh</p>
              </div>
              <div className="flex items-center">
                <img src={emailIcon} alt="Email" className="w-8 h-8 mr-4" />
                <p className="text-xl text-black">aayushent@gmail.com</p>
              </div>
              <div className="flex items-center">
                <img src={phoneIcon} alt="Phone" className="w-8 h-8 mr-4" />
                <p className="text-xl text-black">+91 XXXXXXXXXX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="text-white bg-siteblue border border-siteblue font-regular text-md py-2 mt-8 px-4 rounded-full mx-auto block transition-colors hover:bg-white hover:text-siteblue hover:cursor-pointer">
        Enquire Now
      </button>
    </section>
  );
};

export default GetInTouchSection;
