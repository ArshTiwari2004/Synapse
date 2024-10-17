import React from 'react';
import ChallengeItem from './ChallengeItem';
import { CameraIcon, SparklesIcon, ChatIcon } from '@heroicons/react/outline';

const dailyChallenges = [
  {
    id: 'daily-photo',
    title: 'Daily Photo Challenge',
    description: 'Take a picture of a local landmark from a unique angle.',
    icon: <CameraIcon className="h-6 w-6 text-sky-500" />,
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
    icon: <SparklesIcon className="h-6 w-6 text-teal-500" />,
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
    icon: <ChatIcon className="h-8 w-8 text-green-500" />,
    reward: {
      title: 'Cultural Learner',
      description: 'Earn a "Cultural Learner" badge',
      points: 40,
    },
  },
];

const DailyChallenges = ({ onChallengeCompletion }) => {
  return (
    <div className="bg-#FFFBFA rounded-xl shadow-lg p-5 border-2 border-teal-600 max-w-lg   mx-auto">
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-2">🎯</span> 
        <h2 className="text-2xl font-semibold text-teal-750">Daily Challenges</h2>
      </div>
    

      <div className="space-y-6">
        {dailyChallenges.map((challenge) => (
          <div
            key={challenge.id}
            className="flex items-center justify-between bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out border border-#8BD7D2"
          >
            <div className="flex items-center space-x-4">
              {challenge.icon}
              <div>
                <h3 className="text-xl font-semibold text-sky-blue">{challenge.title}</h3>
                <p className="text-gray-500">{challenge.description}</p>
              </div>
            </div>
            <button
              onClick={() => onChallengeCompletion(challenge.reward)}
              className="bg-teal-600 text-white font-semibold py-2 px-4 rounded-full shadow hover:bg-#49C6E5 transition-colors duration-200"
            >
              Complete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyChallenges;
