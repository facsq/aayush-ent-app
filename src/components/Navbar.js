import React, { useState, useEffect } from 'react';
import logoImage from '../assets/AElogo.png';

const Navbar = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    console.log(props);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 ${isScrolled ? 'bg-siteblue bg-opacity-50 backdrop-filter backdrop-blur-lg duration-1000' : 'bg-black bg-opacity-50'}`}>
      <div className="container mx-auto flex items-center justify-between py-3 px-8">
        <div className="flex items-center">
          <img src={logoImage} alt="Logo" className="w-6 h-4 mr-2" /> {/* Add the logo image */}
          
        </div>
        <div className="flex items-center">
          <button className="text-white font-medium md:hidden" onClick={toggleMenu}>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <ul className={`hidden md:flex md:space-x-10 ${isMenuOpen ? 'block' : 'hidden'}`}>
            <li className="text-white font-light whitespace-nowrap">
              <a href="/#" className="menu-link">Home</a>
            </li>
            <li className="text-white font-light whitespace-nowrap">
              <a href="/#" className="menu-link">About Us</a>
            </li>
            <li className="text-white font-light whitespace-nowrap">
              <a href="/#" className="menu-link">Solar</a>
            </li>
            <li className="text-white font-light whitespace-nowrap">
              <a href="/#" className="menu-link">Security</a>
            </li>
            <li className="text-white font-light whitespace-nowrap">
              <a href="/#" className="menu-link">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      {isMenuOpen && (
        <div className="container mx-auto py-2 px-4 bg-custom-gray rounded-md shadow-lg md:hidden">
          <ul className="space-y-2">
            <li className="text-white font-light whitespace-nowrap">
              <a href="/#" className="menu-link">Home</a>
            </li>
            <li className="text-white font-light whitespace-nowrap">
              <a href="/#" className="menu-link">About Us</a>
            </li>
            <li className="text-white font-light whitespace-nowrap">
              <a href="/#" className="menu-link">Solar</a>
            </li>
            <li className="text-white font-light whitespace-nowrap">
              <a href="/#" className="menu-link">Security</a>
            </li>
            <li className="text-white font-light whitespace-nowrap">
              <a href="/#" className="menu-link">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
