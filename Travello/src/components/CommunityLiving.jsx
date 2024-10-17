import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CommunityLiving = () => {
  const experiences = [
    {
      name: 'Malnad Farmstay',
      description: 'Experience rural life in the Western Ghats, participate in farming activities.',
      image: 'malnad.jpg',
      duration: '2-3 days',
    },
    {
      name: 'Coastal Fishing Village Stay',
      description: 'Live with a fishing family, learn traditional fishing methods.',
      image: 'coastel.jpg',
      duration: '2-4 days',
    },
    {
      name: 'Tribal Village Experience',
      description: 'Immerse yourself in the culture of indigenous Soliga tribe.',
      image: 'tribal.jpg',
      duration: '3-5 days',
    },
    {
      name: 'Urban Family Homestay',
      description: 'Stay with a local family in Bangalore, experience city life.',
      image: 'urban.jpg',
      duration: '1-7days',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gradient-to-b from-indigo-100 to-indigo-200">
      <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6">
        <FaArrowLeft className="mr-2" />
        Back to Home
      </Link>
      <h1 className="text-4xl font-bold mb-8 text-indigo-800 flex items-center">
        <FaHome className="mr-4" />
        Community Living Experiences in Karnataka
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img src={experience.image} alt={experience.name} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-indigo-600">{experience.name}</h2>
              <p className="text-gray-700 mb-2">{experience.description}</p>
              <p className="text-sm text-indigo-500 font-semibold">Duration: {experience.duration}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CommunityLiving;