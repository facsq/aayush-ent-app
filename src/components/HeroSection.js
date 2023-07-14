import React from 'react';
import heroImage from '../assets/hero-image.jpg';
import logoImage from '../assets/logo.png';

const HeroSection = () => {
  return (
    <section className="bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="container mx-auto flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-32">
        <h1 className="pt-16 text-4xl md:text-5xl font-extralight text-white text-center mt-6 mb-12">
          Delivering Sustainable Energy and <br /> Uncompromising Security Solutions
        </h1>
        
        <div className="flex items-center justify-center">
          <img src={logoImage} alt="Logo" className="w-64 sm:w-80 md:w-96 lg:w-112 xl:w-128 2xl:w-144 h-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

