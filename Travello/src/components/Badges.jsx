import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Using axios to fetch data from the backend
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Share2, Filter, ArrowUpDown, Award, Lock, ChevronRight } from 'lucide-react';

const badgeCategories = [
  { id: 'all', name: 'All Categories', icon: '📜' },
  { id: 'exploration', name: 'Exploration', icon: '🗺️' },
  { id: 'challenge', name: 'Challenge', icon: '🏆' },
  { id: 'cultural', name: 'Cultural Immersion', icon: '🎭' },
  { id: 'social', name: 'Social', icon: '👥' },
  { id: 'milestone', name: 'Milestone', icon: '🏁' },
];

const rarityLevels = {
  common: { name: 'Common', color: 'bg-gray-500' },
  uncommon: { name: 'Uncommon', color: 'bg-green-500' },
  rare: { name: 'Rare', color: 'bg-blue-500' },
  epic: { name: 'Epic', color: 'bg-purple-500' },
  legendary: { name: 'Legendary', color: 'bg-yellow-500' },
};

const Badges = () => {
  const [badges, setBadges] = useState([]);
  const [filteredBadges, setFilteredBadges] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  const [selectedBadge, setSelectedBadge] = useState(null);

  const navigate = useNavigate();

  // Fetch badges data from the backend
  useEffect(() => {
    const fetchBadges = async () => {
      try {
        const response = await axios.get('/api/user/badges'); // Replace with your API endpoint
        setBadges(response.data);
        setFilteredBadges(response.data);
      } catch (error) {
        console.error('Error fetching badges:', error);
      }
    };
    fetchBadges();
  }, []);

  useEffect(() => {
    let sorted = [...badges];
    if (selectedCategory !== 'all') {
      sorted = sorted.filter((badge) => badge.category === selectedCategory);
    }

    switch (sortBy) {
      case 'recent':
        sorted.sort((a, b) => new Date(b.earnedDate) - new Date(a.earnedDate));
        break;
      case 'difficulty':
        sorted.sort((a, b) => b.difficulty - a.difficulty);
        break;
      case 'points':
        sorted.sort((a, b) => b.points - a.points);
        break;
      default:
        break;
    }

    setFilteredBadges(sorted);
  }, [badges, selectedCategory, sortBy]);

  const handleShare = (platform, badge) => {
    const shareMessage = `Hey Fam! I have earned a new badge on Travello: ${badge.name}. Share your badge and win exciting prizes! Don't forget to mention Travello. Happy Travelling!`;
    let shareUrl = '';

    switch (platform) {
      case 'Facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=https://travello.com&quote=${encodeURIComponent(shareMessage)}`;
        break;
      case 'Twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessage)}`;
        break;
      case 'Instagram':
        alert('Instagram sharing is currently available only through the app. Please copy and paste the message.');
        break;
      default:
        break;
    }
    if (shareUrl) {
      window.open(shareUrl, '_blank');
    }
  };

  const BadgeCard = ({ badge }) => (
    <motion.div
      className={`relative p-4 rounded-lg shadow-md ${badge.earned ? 'bg-white' : 'bg-gray-100'} cursor-pointer`}
      whileHover={{ scale: 1.05 }}
      onClick={() => setSelectedBadge(badge)}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold">{badge.name}</h3>
        <span className={`px-2 py-1 text-xs font-bold text-white rounded-full ${rarityLevels[badge.rarity].color}`}>
          {rarityLevels[badge.rarity].name}
        </span>
      </div>
      <p className="text-sm text-gray-600 mb-2">{badge.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-indigo-600 font-medium">{badge.points} pts</span>
        {badge.earned ? <Award className="text-green-500" size={20} /> : <Lock className="text-gray-400" size={20} />}
      </div>
      {!badge.earned && (
        <div className="mt-2 bg-gray-200 rounded-full h-2">
          <div className="bg-indigo-600 h-2 rounded-full" style={{ width: `${badge.progress}%` }}></div>
        </div>
      )}
    </motion.div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Your Badges</h1>

      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-2">
          <select
            className="p-2 border rounded-md"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {badgeCategories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <button className="p-2 bg-gray-100 rounded-md">
            <Filter size={20} />
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Sort by:</span>
          <select className="p-2 border rounded-md" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="recent">Most Recent</option>
            <option value="difficulty">Difficulty</option>
            <option value="points">Points</option>
          </select>
          <button className="p-2 bg-gray-100 rounded-md">
            <ArrowUpDown size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBadges.map((badge) => (
          <BadgeCard key={badge.id} badge={badge} />
        ))}
      </div>

      {selectedBadge && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-4">{selectedBadge.name}</h2>
            <p className="text-gray-600 mb-2">{selectedBadge.description}</p>
            <ul className="list-disc list-inside mb-4">
              {selectedBadge.criteria.map((item, index) => (
                <li key={index} className="text-sm text-gray-700">{item}</li>
              ))}
            </ul>
            <div className="flex space-x-4 justify-end">
              <button onClick={() => handleShare('Facebook', selectedBadge)} className="text-blue-600">
                <Facebook size={24} />
              </button>
              <button onClick={() => handleShare('Twitter', selectedBadge)} className="text-blue-400">
                <Twitter size={24} />
              </button>
              <button onClick={() => handleShare('Instagram', selectedBadge)} className="text-pink-500">
                <Instagram size={24} />
              </button>
              <button onClick={() => handleShare('Other', selectedBadge)} className="text-gray-600">
                <Share2 size={24} />
              </button>
            </div>
            <button onClick={() => setSelectedBadge(null)} className="text-indigo-600 mt-4">Close</button>
          </div>
        </div>
      )}

      <div className="mt-8 flex justify-center items-center">
        <ChevronRight className="text-indigo-600" size={36} />
      </div>
    </div>
  );
};

export default Badges;
