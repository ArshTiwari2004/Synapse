import React from 'react';
import { motion } from 'framer-motion';
import { FaGuitar, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TraditionalMusicDance = () => {
  const performances = [
    {
      name: 'Yakshagana',
      description: 'Traditional theater form combining dance, music, and dialogue.',
      image: 'https://www.karnatakatourism.org/wp-content/uploads/2020/06/Yakshagana-1.jpg',
      location: 'Mangalore',
    },
    {
      name: 'Bharatanatyam',
      description: 'Classical dance form originating from Tamil Nadu but popular in Karnataka.',
      image: 'https://www.karnatakatourism.org/wp-content/uploads/2020/06/Bharatanatyam-1.jpg',
      location: 'Bangalore',
    },
    {
      name: 'Carnatic Music Concert',
      description: 'Traditional South Indian classical music performance.',
      image: 'https://www.karnatakatourism.org/wp-content/uploads/2020/06/Carnatic-Music-1.jpg',
      location: 'Mysore',
    },
    {
      name: 'Dollu Kunitha',
      description: 'Drum dance popular in the southern parts of Karnataka.',
      image: 'https://www.karnatakatourism.org/wp-content/uploads/2020/06/Dollu-Kunitha-1.jpg',
      location: 'Tumkur',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gradient-to-b from-yellow-100 to-yellow-200">
      <Link to="/" className="inline-flex items-center text-yellow-600 hover:text-yellow-800 mb-6">
        <FaArrowLeft className="mr-2" />
        Back to Home
      </Link>
      <h1 className="text-4xl font-bold mb-8 text-yellow-800 flex items-center">
        <FaGuitar className="mr-4" />
        Traditional Music & Dance in Karnataka
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {performances.map((performance, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img src={performance.image} alt={performance.name} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-yellow-600">{performance.name}</h2>
              <p className="text-gray-700 mb-2">{performance.description}</p>
              <p className="text-sm text-yellow-500 font-semibold">Location: {performance.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TraditionalMusicDance;