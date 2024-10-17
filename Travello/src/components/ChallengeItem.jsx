import React, { useState } from 'react';

const ChallengeItem = ({ challenge, onComplete }) => {
  const [completed, setCompleted] = useState(false);

  const handleComplete = () => {
    setCompleted(true);
    onComplete();
  };

  return (
    <div className="border-2 border-indigo-200 rounded-lg p-4 transition-all duration-300 hover:shadow-md bg-white">
      <h3 className="text-lg font-semibold mb-2 text-indigo-700">{challenge.title}</h3>
      <p className="text-gray-600 mb-4">{challenge.description}</p>
      <div className="flex justify-between items-center">
        <div>
          <span className="font-semibold text-indigo-600">Reward: </span>
          <span className="text-gray-700">
             Earn {challenge.reward.points} points
          </span>
        </div>
        <button
          onClick={handleComplete}
          disabled={completed}
          className={`px-4 py-2 rounded-full transition-colors duration-200 ${
            completed
              ? 'bg-green-500 text-white cursor-not-allowed'
              : 'bg-indigo-500 text-white hover:bg-indigo-600'
          }`}
        >
          {completed ? 'Completed' : 'Complete Challenge'}
        </button>
      </div>
    </div>
  );
};

export default ChallengeItem;
