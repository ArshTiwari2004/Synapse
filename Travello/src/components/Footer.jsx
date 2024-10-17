import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-cyan-950 text-white py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start px-8 md:px-16">
        {/* Brand Logo and Description */}
        <div className="mb-6 md:mb-0 md:w-1/3">
          <h2 className="text-3xl font-bold">Travello</h2>
          <p className="text-gray-400 mt-2 max-w-sm">
            Discover hidden gems, immerse in local culture, and adventure with us.
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-6 md:mb-0 md:w-1/3">
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#latest" className="text-gray-400 hover:text-white">Home</a>
            </li>
            <li>
              <a href="#about" className="text-gray-400 hover:text-white">About Us</a>
            </li>
            {/* Uncomment these as needed */}
            {/* <li>
              <a href="#destinations" className="text-gray-400 hover:text-white">Destinations</a>
            </li>
            <li>
              <a href="#contact" className="text-gray-400 hover:text-white">Contact</a>
            </li> */}
          </ul>
        </div>

        {/* Social Links */}
        <div className="md:w-1/3">
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
              <FaTwitter />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-cyan-900 text-center py-4 mt-6">
        <p className="text-gray-500">&copy; 2024 Travello. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

