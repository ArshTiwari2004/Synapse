import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-cyan-950 text-white py-10 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Logo */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Travello</h2>
          <p className="text-gray-400 mt-2">Discover hidden gems, immerse in local culture, and adventure with us.</p>
        </div>

        {/* Links */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
            </li>
            <li className="mb-2">
              <Link to="/about" className="text-gray-400 hover:text-white">About Us</Link>
            </li>
            <li className="mb-2">
              <Link to="/destinations" className="text-gray-400 hover:text-white">Destinations</Link>
            </li>
            <li className="mb-2">
              <Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">Support</h3>
          <ul>
            <li className="mb-2">
              <Link to="/faq" className="text-gray-400 hover:text-white">FAQs</Link>
            </li>
            <li className="mb-2">
              <Link to="/support" className="text-gray-400 hover:text-white">Help Center</Link>
            </li>
            <li className="mb-2">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
            </li>
            <li className="mb-2">
              <Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="mb-6">
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

      <div className="text-center mt-10">
        <p className="text-gray-500">&copy; 2024 Travello. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
