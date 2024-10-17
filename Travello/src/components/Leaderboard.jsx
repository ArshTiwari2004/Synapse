import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import { FaMedal, FaUserCircle, FaMapMarkerAlt, FaCamera, FaUtensils, FaLandmark, FaPalette } from 'react-icons/fa';
import { motion } from 'framer-motion';


const globalUsersData = [
  { id: 1, name: 'Rajat Mehra', location: 'Maharashtra', score: 9500, badges: ['CityExplorer', 'FoodExplorer', 'GoldMedalist'], avatar: 'https://i.pravatar.cc/150?img=1' },
  { id: 2, name: 'Shantipriya', location: 'Tamil Nadu', score: 9200, badges: ['CulturalAmbassador', 'HeritageHunter', 'SilverMedalist'], avatar: 'https://i.pravatar.cc/150?img=2' },
  { id: 3, name: 'Arsh Tiwari', location: 'Uttar Pradesh', score: 8900, badges: ['PhotoPro', 'ArtAdmirer', 'BronzeMedalist'], avatar: 'https://i.pravatar.cc/150?img=3' },
  { id: 4, name: 'Tanya', location: 'Delhi', score: 8700, badges: ['CityExplorer', 'FoodExplorer'], avatar: 'https://i.pravatar.cc/150?img=4' },
  { id: 5, name: 'Aashna hegde', location: 'Maharashtra', score: 8500, badges: ['HeritageHunter', 'PhotoPro'], avatar: 'https://i.pravatar.cc/150?img=5' },
  { id: 6, name: 'Ashi Khanna', location: 'Karnataka', score: 8400, badges: ['CulturalAmbassador', 'BronzeMedalist'], avatar: 'https://i.pravatar.cc/150?img=6' },
  { id: 7, name: 'Manav chaddha', location: 'Kerala', score: 8300, badges: ['ArtAdmirer', 'FoodExplorer'], avatar: 'https://i.pravatar.cc/150?img=7' },
  { id: 8, name: 'Rushali yadav', location: 'Rajasthan', score: 8100, badges: ['CityExplorer', 'SilverMedalist'], avatar: 'https://i.pravatar.cc/150?img=8' },
  { id: 9, name: 'Sparsh', location: 'Gujarat', score: 8000, badges: ['HeritageHunter', 'PhotoPro'], avatar: 'https://i.pravatar.cc/150?img=9' },
  { id: 10, name: 'Priya Roy', location: 'West Bengal', score: 7900, badges: ['CulturalAmbassador', 'GoldMedalist'], avatar: 'https://i.pravatar.cc/150?img=10' },
  { id: 11, name: 'Shruti', location: 'Haryana', score: 7700, badges: ['ArtAdmirer', 'BronzeMedalist'], avatar: 'https://i.pravatar.cc/150?img=11' },
  { id: 12, name: 'Siya Patel', location: 'Punjab', score: 7600, badges: ['CityExplorer', 'HeritageHunter'], avatar: 'https://i.pravatar.cc/150?img=12' },
  { id: 13, name: 'Vansh', location: 'Odisha', score: 7500, badges: ['FoodExplorer', 'PhotoPro'], avatar: 'https://i.pravatar.cc/150?img=13' },
  { id: 14, name: 'Riya sachdeva', location: 'Bihar', score: 7400, badges: ['CulturalAmbassador', 'SilverMedalist'], avatar: 'https://i.pravatar.cc/150?img=14' },
  { id: 15, name: 'Ananya singh', location: 'Madhya Pradesh', score: 7300, badges: ['ArtAdmirer', 'CityExplorer'], avatar: 'https://i.pravatar.cc/150?img=15' },
  { id: 16, name: 'Mia Sharma', location: 'Chhattisgarh', score: 7200, badges: ['FoodExplorer', 'BronzeMedalist'], avatar: 'https://i.pravatar.cc/150?img=16' },
  { id: 17, name: 'Alexander Scott', location: 'Goa', score: 7100, badges: ['HeritageHunter', 'PhotoPro'], avatar: 'https://i.pravatar.cc/150?img=17' },
  { id: 18, name: 'Ava Evans', location: 'Assam', score: 7000, badges: ['CityExplorer', 'CulturalAmbassador'], avatar: 'https://i.pravatar.cc/150?img=18' },
  { id: 19, name: 'Benjamin ', location: 'Jharkhand', score: 6900, badges: ['FoodExplorer', 'GoldMedalist'], avatar: 'https://i.pravatar.cc/150?img=19' },
  { id: 20, name: 'Charlotte Moore', location: 'Himachal Pradesh', score: 6800, badges: ['ArtAdmirer', 'SilverMedalist'], avatar: 'https://i.pravatar.cc/150?img=20' }
];


const regionalUsersData = {
  Maharashtra: [
    { id: 1, name: 'Amit Patel', location: 'Mumbai', score: 8200, badges: ['CityExplorer', 'FoodExplorer'], avatar: 'https://i.pravatar.cc/150?img=11' },
    { id: 2, name: 'Priya Sharma', location: 'Pune', score: 7900, badges: ['HeritageHunter', 'PhotoPro'], avatar: 'https://i.pravatar.cc/150?img=12' },
  ],
  // More regional data...
};

const highScoresData = {
  global: 9500,
  Maharashtra: 8200,
  'Tamil Nadu': 7800,
  'Uttar Pradesh': 7500,
  Delhi: 7200,
};

const socket = io('http://localhost:5000');

const badges = {
  CityExplorer: { icon: <FaMapMarkerAlt />, color: 'bg-blue-500' },
  CulturalAmbassador: { icon: <FaLandmark />, color: 'bg-purple-500' },
  FoodExplorer: { icon: <FaUtensils />, color: 'bg-green-500' },
  HeritageHunter: { icon: <FaLandmark />, color: 'bg-yellow-700' },
  ArtAdmirer: { icon: <FaPalette />, color: 'bg-pink-500' },
  PhotoPro: { icon: <FaCamera />, color: 'bg-indigo-500' },
  GoldMedalist: { icon: <FaMedal className="text-yelloe-700" />, color: 'bg-yellow-400' },
  SilverMedalist: { icon: <FaMedal className="text-grey-800" />, color: 'bg-gray-400' },
  BronzeMedalist: { icon: <FaMedal className="text-orange-600" />, color: 'bg-orange-400' },
};

const states = ['Maharashtra', 'Tamil Nadu', 'Uttar Pradesh', 'Delhi'];

const Leaderboard = () => {
  const [globalUsers, setGlobalUsers] = useState(globalUsersData);
  const [regionalUsers, setRegionalUsers] = useState(regionalUsersData);
  const [selectedState, setSelectedState] = useState('Global');
  const [highScores, setHighScores] = useState(highScoresData);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Simulate user location detection
    setTimeout(() => setUserLocation('Maharashtra'), 1000);

    // Real-time leaderboard update via socket.io
    socket.on('updateLeaderboard', (data) => {
      setGlobalUsers(data.global);
      setRegionalUsers(data.regional);
      setHighScores(data.highScores);
    });

    return () => {
      socket.off('updateLeaderboard');
    };
  }, []);

  const getLeaderboardData = () => {
    return selectedState === 'Global' ? globalUsers : regionalUsers[selectedState] || [];
  };

  const renderBadges = (userBadges) => {
    return userBadges.map((badge, index) => (
      <span key={index} className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${badges[badge].color} text-white mr-1`}>
        {badges[badge].icon}
        <span className="ml-1">{badge}</span>
      </span>
    ));
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-b from-mint to-light-green ">
      <h1 className="text-4xl font-bold text-center mb-8 text-teal-950">Tourism Adventure Leaderboard</h1>
      <div className="mb-4">
        <label htmlFor="stateSelect" className="block text-l font-large text-emerald-900 font-bold">Select Region:</label>
        <select
          id="stateSelect"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-teal-50 border-mint focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          <option value="Global">Global</option>
          {states.map((state) => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>
      </div>

      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6 bg-blue-50">
          <h3 className="text-lg leading-6 font-medium text-teal-900">{selectedState} Leaderboard</h3>
          <p className="mt-1 max-w-2xl text-sm text-teal-600 text-bold">Top adventurers and their achievements</p>
        </div>
        <ul className="divide-y divide-gray-200">
          {getLeaderboardData().map((user, index) => (
            <motion.li
              key={user.id}
              className="px-4 py-4 sm:px-6 hover:bg-gray-50 transition duration-150 ease-in-out"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img className="h-10 w-10 rounded-full" src={user.avatar} alt={user.name} />
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{user.name}</div>
                    <div className="text-sm text-gray-500">{user.location}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-sm text-gray-500 mr-2">Score: {user.score}</div>
                  {renderBadges(user.badges)}
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Leaderboard;