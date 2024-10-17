import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaMapMarkedAlt, FaTrophy, FaUserAlt, FaPlane, FaMap, FaStar, FaUsers, FaCompass, FaMedal, FaCoins, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';

const LandingPage = () => {
  return (
    <div className="bg-off-white"> 
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="relative z-10">
          {/* Header Section */}
          <motion.header
            className="absolute top-0 w-full p-4 z-20 bg-sky-blue"  
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="container mx-auto flex justify-between items-center">
              <motion.h1
                className="text-4xl font-extrabold tracking-wide text-off-white font-lobster"  
                whileHover={{ scale: 1.1 }}
              >
                Travello
              </motion.h1>

              <nav className="flex space-x-6 items-center">
                <Link to="/" className="text-lg font-medium text-off-white hover:text-light-blue transition font-montserrat"> {/* Light Blue hover */}
                  <FaHome className="inline mr-1" /> Home
                </Link>
                <a
                  href="#about"
                  className="text-lg font-medium text-white hover:text-blue-200 transition font-montserrat"
                >
                  <FaMapMarkedAlt className="inline mr-1" /> About Us
                </a>
                <a
                  href="#reviews"
                  className="text-lg font-medium text-white hover:text-blue-200 transition font-montserrat"
                >
                  <FaTrophy className="inline mr-1" /> Reviews
                </a> 
                <a
                  href="#latest"
                  className="text-lg font-medium text-white hover:text-blue-200 transition font-montserrat"
                >
                  <FaPlane className="inline mr-1" /> Latest Adventures
                </a> 
                {/* <Link to="/profile" className="text-lg font-medium text-off-white hover:text-light-blue transition font-montserrat">
                  <FaUserAlt className="inline mr-1" /> Profile
                </Link> */}
                <Link to="/signup" className="px-4 py-2 border border-off-white text-off-white bg-sky-blue rounded-lg transition duration-300 hover:bg-light-blue hover:text-off-white"> {/* Sky Blue background with Light Blue hover */}
                  Sign Up
                </Link>
                <Link to="/signin" className="px-4 py-2 border border-off-white text-off-white bg-sky-blue rounded-lg transition duration-300 hover:bg-light-blue hover:text-off-white">
                  Sign In
                </Link>
              </nav>
            </div>
          </motion.header>

          {/* Split Screen Layout */}
          <div className="flex h-full pt-20">
            <div className="w-1/2 flex flex-col justify-center items-start pl-16">
              <h2 className="text-6xl font-extrabold text-teal-green mb-4 leading-tight"> {/* Teal Green text */}
                Let's Discover the World Together
              </h2>

              <motion.p className="text-4xl text-teal-green mb-8 font-playfair font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Typewriter
                  options={{
                    strings: ["Let us take you away on your best trip ever"],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                  }}
                />
              </motion.p>

              <motion.button
                className="px-8 py-4 text-lg font-semibold border border-light-blue text-light-blue rounded-lg bg-off-white hover:bg-light-blue hover:text-off-white transition-all duration-300"  // Light Blue border and text with Light Blue hover
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Explore!
              </motion.button>

              <div className="flex justify-between mt-8 text-teal-green text-lg w-full">  {/* Teal Green text */}
                <div className="flex items-center space-x-2">
                  <FaMap className="text-2xl" />
                  <span> 100+ Destinations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaPlane className="text-2xl" />
                  <span> 100+ Visits</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaStar className="text-2xl" />
                  <span> 500+ Reviews</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaUsers className="text-2xl" />
                  <span>300+ Activities</span>
                </div>
              </div>
            </div>

            <div className="w-1/2 h-full flex justify-center items-center">
              <img
                src="imag1.jpg"
                alt="Travel Destination"
                className="w-2/3 h-auto object-cover rounded-lg transform transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-12 space-x-12 text-teal-green text-2xl font-bold">  {/* Teal Green text */}
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