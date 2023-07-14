import React from 'react';
import logoImage from '../assets/hrlogo.png';
import facebookIcon from '../assets/facebook.png';
import twitterIcon from '../assets/twitter.png';
import instagramIcon from '../assets/instagram.png';
import linkedinIcon from '../assets/linkedin.png';

const Footer = () => {
  return (
    <footer className="bg-siteblue py-8">
      <div className="container mx-auto text-white">
        <div className="flex flex-col md:flex-row items-center justify-center mb-8">
          <img src={logoImage} alt="Logo" className="w-auto h-4 mb-4 mt-4 mr-4" />
          <span className="text-white md:text-gray-400">|</span>
          <div className="flex space-x-5 ml-4">
            <a href="/#" className="footer-icon-link"><img src={facebookIcon} alt="Facebook" className="w-6 h-6" /></a>
            <a href="/#" className="footer-icon-link"><img src={twitterIcon} alt="Twitter" className="w-6 h-6" /></a>
            <a href="/#" className="footer-icon-link"><img src={instagramIcon} alt="Instagram" className="w-6 h-6" /></a>
            <a href="/#" className="footer-icon-link"><img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" /></a>
          </div>
        </div>
        <div className="flex justify-center mb-8">
          <ul className="flex space-x-4 text-lg">
            <li className="footer-nav-link"><a href="/#">Home</a></li>
            <li className="footer-nav-link"><a href="/#">About Us</a></li>
            <li className="footer-nav-link"><a href="/#">Solar</a></li>
            <li className="footer-nav-link"><a href="/#">Security</a></li>
            <li className="footer-nav-link"><a href="/#">Contact</a></li>
          </ul>
        </div>
        <p className="text-white text-center font-thin mb-8 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-40">
          Ready to embrace sustainable energy and enhance your security? Contact us today to discuss your requirements and find the perfect solution for your home or business.
        </p>
        <p className="text-center font-regular">
          &copy; 2023 Aayush Enterprises. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
