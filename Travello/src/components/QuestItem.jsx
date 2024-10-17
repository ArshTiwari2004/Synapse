import React, { useState } from 'react';

const QuestItem = ({ quest, onComplete }) => {
  const [expanded, setExpanded] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleComplete = () => {
    setCompleted(true);
    onComplete();
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-500';
      case 'medium': return 'bg-yellow-500';
      case 'hard': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="border-2 border-teal-300 rounded-lg p-4 transition-all duration-300 hover:shadow-lg bg-teal-200">
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setExpanded(!expanded)}>
        <h3 className="text-xl font-semibold text-teal-700">{quest.title}</h3>
        <div className="flex items-center space-x-2">
          <span className={`px-2 py-1 rounded-full text-xs text-white ${getDifficultyColor(quest.difficulty)}`}>
            {quest.difficulty}
          </span>
          <span className="text-sm text-gray-600">{quest.estimatedTime}</span>
          <span className={`transform transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </div>
      </div>
      {expanded && (
        <div className="mt-4 space-y-3">
          <p className="text-gray-600">{quest.description}</p>
          <div>
            <h4 className="font-semibold text-teal-300">Objectives:</h4>
            <ul className="list-disc list-inside">
              {quest.objectives.map((objective, index) => (
                <li key={index} className="text-gray-700">{objective}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-teal-600">Reward:</h4>
            <p className="text-gray-700">{quest.reward.description} and {quest.reward.points} points</p>
          </div>
          <button
            onClick={handleComplete}
            disabled={completed}
            className={`mt-4 px-6 py-2 rounded-full transition-colors duration-200 ${
              completed
                ? 'bg-teal-700 text-white cursor-not-allowed'
                : 'bg-mint text-white hover:bg-mint-600'
            }`}
          >
            {completed ? 'Completed' : 'Complete Quest'}
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestItem;
