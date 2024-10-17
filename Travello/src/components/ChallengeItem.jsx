import React, { useState } from 'react';

const ChallengeItem = ({ challenge, onComplete }) => {
  const [completed, setCompleted] = useState(false);

  const handleComplete = () => {
    setCompleted(true);
    onComplete();
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2 text-sky-blue">{challenge.title}</h3>
      <p className="text-gray-600 mb-4">{challenge.description}</p>
      <div className="flex justify-between items-center">
        <div>
          <span className="font-semibold text-sky-blue">Reward: </span>
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
              : 'bg-teal-600 text-white hover:bg-teal-900'
          }`}
        >
          {completed ? 'Completed' : 'Complete Challenge'}
        </button>
      </div>
    </div>
  );
};

export default ChallengeItem;
