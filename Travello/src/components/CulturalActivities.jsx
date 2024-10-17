import React from 'react';
import { motion } from 'framer-motion';
import { FaTheaterMasks, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CulturalActivities = () => {
  const activities = [
    {
      name: 'Mysore Dasara',
      description: 'A 10-day festival celebrating the victory of good over evil.',
      image: 'mysore.jpg',
      date: 'October 15-24, 2023',
    },
    {
      name: 'Hampi Utsav',
      description: 'A celebration of the rich cultural heritage of Hampi.',
      image: 'hampi.jpg',
      date: 'November 3-5, 2023',
    },
    {
      name: 'Yakshagana Performance',
      description: 'Traditional theater form combining dance, music, and dialogue.',
      image: 'yakshagana.jpg',
      date: 'Every Saturday',
    },
    {
      name: 'Pattadakal Dance Festival',
      description: 'Classical dance performances at the UNESCO World Heritage site.',
      image: 'patt.jpg',
      date: 'January 15-17, 2024',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gradient-to-b from-yellow-100 to-yellow-200">
      <Link to="/" className="inline-flex items-center text-yellow-600 hover:text-yellow-800 mb-6">
        <FaArrowLeft className="mr-2" />
        Back to Home
      </Link>
      <h1 className="text-4xl font-bold mb-8 text-yellow-800 flex items-center">
        <FaTheaterMasks className="mr-4" />
        Cultural Activities in Udupi
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img src={activity.image} alt={activity.name} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-yellow-600">{activity.name}</h2>
              <p className="text-gray-700 mb-2">{activity.description}</p>
              <p className="text-sm text-yellow-500 font-semibold">{activity.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CulturalActivities;