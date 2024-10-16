import React from 'react';
import ChallengeItem from './ChallengeItem';

const dailyChallenges = [
  {
    id: 'daily-photo',
    title: 'Daily Photo Challenge',
    description: 'Take a picture of a local landmark from a unique angle.',
    reward: {
      title: 'Daily Photographer',
      description: 'Earn a "Daily Photographer" badge',
      points: 50,
    },
  },
  {
    id: 'daily-food',
    title: 'Taste of the Day',
    description: 'Try a local street food and share your experience.',
    reward: {
      title: 'Food Explorer',
      description: 'Earn a "Food Explorer" badge',
      points: 30,
    },
  },
  {
    id: 'daily-interact',
    title: 'Local Interaction',
    description: 'Have a conversation with a local and learn something new about the culture.',
    reward: {
      title: 'Cultural Learner',
      description: 'Earn a "Cultural Learner" badge',
      points: 40,
    },
  },
];

const DailyChallenges = ({ onChallengeCompletion }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-2 border-blue-300">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700">Daily Challenges</h2>
      <div className="space-y-4">
        {dailyChallenges.map((challenge) => (
          <ChallengeItem key={challenge.id} challenge={challenge} onComplete={() => onChallengeCompletion(challenge.reward)} />
        ))}
      </div>
    </div>
  );
};

export default DailyChallenges;
