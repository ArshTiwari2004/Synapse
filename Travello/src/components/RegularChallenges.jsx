import React, { useState } from 'react';
import ChallengeItem from './ChallengeItem';
import Confetti from 'react-confetti';

const regularChallenges = [
  {
    id: 'hidden-gem',
    title: 'Hidden Gem Finder',
    description: 'Discover a lesser-known attraction and create a short video guide.',
    reward: {
      title: 'Explorer Extraordinaire',
      points: 100,
    },
  },
  {
    id: 'local-legend',
    title: 'Local Legend',
    description: 'Learn about a local legend or myth and retell it creatively.',
    reward: {
      title: 'Storyteller',
      points: 80,
    },
  },
  {
    id: 'eco-warrior',
    title: 'Eco-Warrior',
    description: 'Participate in a local environmental conservation activity.',
    reward: {
      title: 'Green Guardian',
      points: 120,
    },
  },
  {
    id: 'art-hunter',
    title: 'Art Hunter',
    description: 'Find and photograph three pieces of street art or public sculptures.',
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
    <div className="bg-white rounded-lg shadow-md p-6 border-2 border-green-300">
      {confetti && <Confetti />}
      <h2 className="text-2xl font-semibold mb-4 text-green-700">Regular Challenges</h2>
      <div className="space-y-4">
        {regularChallenges.map((challenge) => (
          <ChallengeItem key={challenge.id} challenge={challenge} onComplete={() => handleComplete(challenge.reward)} />
        ))}
      </div>
    </div>
  );
};

export default RegularChallenges;
