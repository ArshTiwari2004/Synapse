import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaMapMarkedAlt, FaTrophy, FaUserAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Footer from './Footer';
import { FaPlane, FaMap, FaStar, FaUsers, FaCompass, FaMedal, FaCoins, FaGlobe } from "react-icons/fa"; // Import additional icons

const LandingPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen bg-white">
        {/* Main content, including header and landing page text */}
        <div className="relative z-10">
          {/* Header Section */}
          <motion.header
            className="absolute top-0 w-full p-4 z-20 bg-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="container mx-auto flex justify-between items-center">
              {/* Travello Logo with Typewriter Effect */}
              <motion.h1
                className="text-4xl font-extrabold tracking-wide text-emerald-900 font-lobster"
                whileHover={{ scale: 1.1 }}
              >
                <Typewriter
                  options={{
                    strings: ["Travello"],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                  }}
                />
              </motion.h1>

              {/* Navigation Links */}
              <nav className="flex space-x-6 items-center">
                <Link
                  to="/"
                  className="text-lg font-medium text-emerald-900 hover:text-blue-200 transition font-montserrat"
                >
                  <FaHome className="inline mr-1" /> Home
                </Link>
                <Link
                  to="/discover"
                  className="text-lg font-medium text-emerald-900 hover:text-blue-200 transition font-montserrat"
                >
                  <FaMapMarkedAlt className="inline mr-1" /> Discover
                </Link>
                <Link
                  to="/leaderboard"
                  className="text-lg font-medium text-emerald-900 hover:text-blue-200 transition font-montserrat"
                >
                  <FaTrophy className="inline mr-1" /> Leaderboard
                </Link>
                <Link
                  to="/profile"
                  className="text-lg font-medium text-emerald-900 hover:text-blue-200 transition font-montserrat"
                >
                  <FaUserAlt className="inline mr-1" /> Profile
                </Link>
                {/* Sign Up and Sign In Buttons */}
                <Link
                  to="/signup"
                  className="px-4 py-2 border border-emerald-900 text-emerald-900 bg-white rounded-lg transition duration-300 hover:bg-emerald-900 hover:text-white"
                >
                  Sign Up
                </Link>
                <Link
                  to="/signin"
                  className="px-4 py-2 border border-emerald-900 text-emerald-900 bg-white rounded-lg transition duration-300 hover:bg-emerald-900 hover:text-white"
                >
                  Sign In
                </Link>
              </nav>
            </div>
          </motion.header>

          {/* Split Screen Layout */}
          <div className="flex h-full pt-20">
            {/* Left Side - Main Text */}
            <div className="w-1/2 flex flex-col justify-center items-start pl-16">
              <h2 className="text-6xl font-extrabold text-emerald-900 mb-4  leading-tight">
                Let's Discover the World Together
              </h2>
              <p className="text-4xl text-emerald-800 mb-8 font-playfair font-bold">
                Let us take you away on your best trip ever
              </p>

              {/* Get Started Button */}
              <motion.button
                className="px-8 py-4 text-lg font-semibold border border-emerald-800 text-emerald-800 rounded-lg hover:bg-emerald-900 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Lets Explore!
              </motion.button>

              {/* Unique Travel Statistics Below the Button */}
              <div className="flex justify-between mt-8 text-emerald-600 text-lg w-full">
                <div className="flex items-center space-x-2">
                  <FaMap className="text-2xl" /> {/* Icon for Destinations */}
                  <span> 100+ Destinations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaPlane className="text-2xl" /> {/* Icon for Visits */}
                  <span> 100+ Visits</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaStar className="text-2xl" /> {/* Icon for Reviews */}
                  <span> 500+ Reviews</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaUsers className="text-2xl" /> {/* Icon for Activities */}
                  <span>300+ Activities</span>
                </div>
              </div>
            </div>

            {/* Right Side - Image Component */}
            <div className="w-1/2 h-full flex justify-center items-center">
              <img
                src="imag1.jpg" // Make sure to replace with your actual image path
                alt="Travel Destination"
                className="w-2/3 h-auto object-cover rounded-lg transform transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Horizontal Section with Icons and Words */}
        <div className="flex justify-center items-center mt-12 space-x-12 text-emerald-900 text-2xl font-bold">
          <motion.div whileHover={{ scale: 1.2 }} className="flex flex-col items-center">
            <FaCompass className="text-4xl" />
            <span>Explore</span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="flex flex-col items-center">
            <FaMedal className="text-4xl" />
            <span>Compete</span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="flex flex-col items-center">
            <FaCoins className="text-4xl" />
            <span>Earn</span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="flex flex-col items-center">
            <FaGlobe className="text-4xl" />
            <span>Experience</span>
          </motion.div>
          
        </div>
      </div>
    
  </div>
      
  );
};

export default LandingPage;
