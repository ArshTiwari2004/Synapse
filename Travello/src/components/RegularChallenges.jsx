import React, { useState } from 'react';
import ChallengeItem from './ChallengeItem';
import Confetti from 'react-confetti';
import { VideoCameraIcon, BookOpenIcon, GlobeAltIcon, PhotographIcon } from '@heroicons/react/outline';

// Define the challenges
const regularChallenges = [
  {
    id: 'hidden-gem',
    title: 'Hidden Gem Finder',
    description: 'Discover a lesser-known attraction and create a short video guide.',
    icon: <VideoCameraIcon className="h-6 w-6 text-blue-500" />,
    reward: {
      title: 'Explorer Extraordinaire',
      points: 100,
    },
  },
  {
    id: 'local-legend',
    title: 'Local Legend',
    description: 'Learn about a local legend or myth and retell it creatively.',
    icon: <BookOpenIcon className="h-6 w-6 text-yellow-500" />,
    reward: {
      title: 'Storyteller',
      points: 80,
    },
  },
  {
    id: 'eco-warrior',
    title: 'Eco-Warrior',
    description: 'Participate in a local environmental conservation activity.',
    icon: <GlobeAltIcon className="h-6 w-6 text-green-500" />,
    reward: {
      title: 'Green Guardian',
      points: 120,
    },
  },
  {
    id: 'art-hunter',
    title: 'Art Hunter',
    description: 'Find and photograph three pieces of street art or public sculptures.',
    icon: <PhotographIcon className="h-6 w-6 text-purple-500" />,
    reward: {
      title: 'Art Aficionado',
      points: 90,
    },
  },
];

const RegularChallenges = ({ onChallengeCompletion }) => {
  const [confetti, setConfetti] = useState(false);

  const handleComplete = (reward) => {
    onChallengeCompletion(reward);
    setConfetti(true);
    setTimeout(() => setConfetti(false), 3000); 
  };

  return (
    <div className="bg-gradient-to-b from-mint to-light-green rounded-lg shadow-md p-6 border-2 border-teal-600  mx-4 sm:mx-8 lg:mx-12"> 
      {confetti && <Confetti />}
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-2">🎯</span> 
        <h2 className="text-2xl font-semibold text-teal-750"> Regular Challenges </h2>
      </div>
    
      <div className="space-y-4">
        {regularChallenges.map((challenge) => (
          <div key={challenge.id} className="bg-white p-4 rounded-lg shadow-l border border-teal-600 flex items-center space-x-2 ">
            
            <div className="flex items-center space-x-2">
              <div className="flex-shrink-0">{challenge.icon}</div>
              <ChallengeItem 
                challenge={challenge} 
                onComplete={() => handleComplete(challenge.reward)} 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegularChallenges;

