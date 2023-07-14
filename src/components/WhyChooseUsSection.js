import React from 'react';
import backgroundImg from '../assets/abstract-background.png';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';

const WhyChooseUsSection = () => {
  return (
    <section className="relative py-12 bg-white">
      <div className="absolute inset-0">
        <img src={backgroundImg} alt="Background" className="object-cover w-full h-full" />
        <div className="absolute inset-0 "></div>
      </div>
      <div className="container mx-auto relative px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl text-center font-bold text-siteblue">WHY CHOOSE US?</h2>
        <p className="text-siteblue text-center text-lg sm:px-8 md:px-12 lg:px-16 xl:px-60 pt-8 pb-8">
          At Aayush Enterprises, we are committed to delivering quality products and services that meet your expectations and budget. We have a team of experienced and certified engineers and technicians who can design, install, and maintain your solar and security systems with utmost professionalism and care.
        </p>

        <div className="grid grid-cols-1 lg:-grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12  md:gap-5 xl:gap-24 2xl:mx-40 2xl:gap-16 mx-auto">
          <div className="bg-white h-96 rounded-2xl overflow-hidden shadow-lg hover:drop-shadow-2xl duration-300">
            <div className="p-8">
              <img src={icon1} alt="Icon 1" className="w-16 h-16 mx-auto my-8" />
              <h3 className="text-2xl font-semibold text-siteblue mb-8 text-center">Wide range of products and services</h3>
              <p className="text-siteblue text-center">We offer a wide range of products and services from reputed and reliable brands and partners.</p>
            </div>
          </div>
          <div className="bg-white h-96 rounded-2xl overflow-hidden shadow-lg hover:drop-shadow-2xl duration-300">
            <div className="p-8">
              <img src={icon2} alt="Icon 2" className="w-16 h-16 mx-auto my-8" />
              <h3 className="text-2xl font-semibold text-siteblue mb-8 text-center">Customized and cost-effective solutions</h3>
              <p className="text-siteblue text-center">We provide customized and cost-effective solutions that suit your specific needs and goals.</p>
            </div>
          </div>
          <div className="bg-white h-96 rounded-2xl overflow-hidden shadow-lg hover:drop-shadow-2xl duration-300">
            <div className="p-8">
              <img src={icon3} alt="Icon 3" className="w-16 h-16 mx-auto my-8" />
              <h3 className="text-2xl font-semibold text-siteblue mb-8 text-center">After-sales support and warranty</h3>
              <p className="text-siteblue text-center">We offer after-sales support and warranty for all our products and services.</p>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default WhyChooseUsSection;
