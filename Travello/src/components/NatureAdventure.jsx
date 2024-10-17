import React from 'react';
import { motion } from 'framer-motion';
import { FaHiking, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NatureAdventure = () => {
  const adventures = [
    {
      name: 'Coorg Trekking',
      description: 'Trek through lush coffee plantations and misty hills.',
      image: 'coorg.jpg',
      difficulty: 'Moderate',
    },
    {
      name: 'Dandeli White Water Rafting',
      description: 'Experience thrilling rapids on the Kali River.',
      image: 'rafting.png',
      difficulty: 'Challenging',
    },
    {
      name: 'Nandi Hills Paragliding',
      description: 'Soar above the scenic Nandi Hills for a bird\'s eye view.',
      image: 'para.jpg',
      difficulty: 'Moderate',
    },
    {
      name: 'Gokarna Beach Trek',
      description: 'Hike along pristine beaches and rocky cliffs.',
      image: 'beach.jpg',
      difficulty: 'Easy',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gradient-to-b from-green-100 to-green-200">
      <Link to="/" className="inline-flex items-center text-green-600 hover:text-green-800 mb-6">
        <FaArrowLeft className="mr-2" />
        Back to Home
      </Link>
      <h1 className="text-4xl font-bold mb-8 text-green-800 flex items-center">
        <FaHiking className="mr-4" />
        Nature & Adventure in Karnataka
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {adventures.map((adventure, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img src={adventure.image} alt={adventure.name} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-green-600">{adventure.name}</h2>
              <p className="text-gray-700 mb-2">{adventure.description}</p>
              <p className="text-sm text-green-500 font-semibold">Difficulty: {adventure.difficulty}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NatureAdventure;