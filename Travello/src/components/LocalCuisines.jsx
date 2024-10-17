import React from 'react';
import { motion } from 'framer-motion';
import { FaUtensils, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LocalCuisines = () => {
  const cuisines = [
    {
      name: 'Bisi Bele Bath',
      description: 'A spicy, rice-based dish with lentils and vegetables.',
      image: 'bbjpeg',
    },
    {
      name: 'Mysore Masala Dosa',
      description: 'A crispy crepe filled with spicy potato mixture and red chutney.',
      image: 'md.jpeg',
    },
    {
      name: 'Neer Dosa',
      description: 'A thin, lacy rice crepe popular in coastal Karnataka.',
      image: 'nd.jpg',
    },
    {
      name: 'Ragi Mudde',
      description: 'A healthy ball made from finger millet flour, often served with sambar.',
      image: 'ragi.jpg',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gradient-to-b from-orange-100 to-orange-200">
      <Link to="/" className="inline-flex items-center text-orange-600 hover:text-orange-800 mb-6">
        <FaArrowLeft className="mr-2" />
        Back to Home
      </Link>
      <h1 className="text-4xl font-bold mb-8 text-orange-800 flex items-center">
        <FaUtensils className="mr-4" />
        Local Cuisines of Udupi
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cuisines.map((cuisine, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img src={cuisine.image} alt={cuisine.name} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-orange-600">{cuisine.name}</h2>
              <p className="text-gray-700">{cuisine.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LocalCuisines;