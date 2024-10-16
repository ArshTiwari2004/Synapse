import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Share2, Filter, ArrowUpDown, Award, Lock, ChevronRight } from 'lucide-react';

// Sample badge data for display purposes
const sampleBadges = [
  {
    id: 1,
    name: 'Explorer',
    description: 'Awarded for exploring 5 new destinations.',
    category: 'exploration',
    rarity: 'common',
    points: 10,
    earned: true,
    earnedDate: '2023-10-01',
    difficulty: 2,
    progress: 100,
    criteria: ['Visit 5 destinations', 'Complete 3 location-based tasks'],
  },
  {
    id: 2,
    name: 'Culture Enthusiast',
    description: 'Engaged in 3 cultural events.',
    category: 'cultural',
    rarity: 'uncommon',
    points: 20,
    earned: false,
    progress: 60,
    difficulty: 3,
    criteria: ['Attend 3 cultural events', 'Participate in at least one local festival'],
  },
  {
    id: 3,
    name: 'Challenge Master',
    description: 'Completed 10 unique challenges.',
    category: 'challenge',
    rarity: 'rare',
    points: 30,
    earned: true,
    earnedDate: '2023-09-15',
    difficulty: 4,
    progress: 100,
    criteria: ['Finish 10 different challenges', 'Achieve a score of 80% or higher'],
  },
  {
    id: 4,
    name: 'Social Butterfly',
    description: 'Connected with 20 new people.',
    category: 'social',
    rarity: 'epic',
    points: 50,
    earned: false,
    progress: 40,
    difficulty: 5,
    criteria: ['Connect with 20 new people', 'Start 5 new conversations'],
  },
  {
    id: 5,
    name: 'Milestone Achiever',
    description: 'Reached a major milestone in achievements.',
    category: 'milestone',
    rarity: 'legendary',
    points: 100,
    earned: false,
    progress: 25,
    difficulty: 6,
    criteria: ['Achieve 5 significant goals', 'Reach the highest level in a challenge'],
  },
];

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
  const [badges, setBadges] = useState(sampleBadges);
  const [filteredBadges, setFilteredBadges] = useState(sampleBadges);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  const [selectedBadge, setSelectedBadge] = useState(null);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/challenges');
  };


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
    console.log(`Sharing ${badge.name} on ${platform}`);
    alert(`Sharing ${badge.name} on ${platform}`);
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

      <div className="text-center mt-8">
        <button  onClick={handleNavigate}
        className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-500 transition ease-in-out duration-200">
          <ChevronRight size={20} className="inline-block mr-2" />
          Explore Related Challenges
        </button>
      </div>
    </div>
  );
};

export default Badges;

