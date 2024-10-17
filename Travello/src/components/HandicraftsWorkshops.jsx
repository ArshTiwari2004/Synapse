import React from 'react';
import { motion } from 'framer-motion';
import { FaPaintBrush, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HandicraftsWorkshops = () => {
  const workshops = [
    {
      name: 'Channapatna Toy Making',
      description: 'Learn to make colorful wooden toys using traditional techniques.',
      image: 'https://www.karnatakatourism.org/wp-content/uploads/2020/06/Channapatna-Toys-1.jpg',
      duration: '3 hours',
    },
    {
      name: 'Bidriware Workshop',
      description: 'Create intricate metal artifacts with silver inlay work.',
      image: 'https://www.karnatakatourism.org/wp-content/uploads/2020/06/Bidriware-1.jpg',
      duration: '4 hours',
    },
    {
      name: 'Mysore Silk Painting',
      description: 'Paint on pure Mysore silk using traditional motifs and techniques.',
      image: 'https://www.karnatakatourism.org/wp-content/uploads/2020/06/Mysore-Silk-1.jpg',
      duration: '2 hours',
    },
    {
      name: 'Sandalwood Carving',
      description: 'Learn the art of carving intricate designs on fragrant sandalwood.',
      image: 'https://www.karnatakatourism.org/wp-content/uploads/2020/06/Sandalwood-Carving-1.jpg',
      duration: '5 hours',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gradient-to-b from-blue-100 to-blue-200">
      <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
        <FaArrowLeft className="mr-2" />
        Back to Home
      </Link>
      <h1 className="text-4xl font-bold mb-8 text-blue-800 flex items-center">
        <FaPaintBrush className="mr-4" />
        Handicrafts Workshops in Karnataka
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {workshops.map((workshop, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img src={workshop.image} alt={workshop.name} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-blue-600">{workshop.name}</h2>
              <p className="text-gray-700 mb-2">{workshop.description}</p>
              <p className="text-sm text-blue-500 font-semibold">Duration: {workshop.duration}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HandicraftsWorkshops;