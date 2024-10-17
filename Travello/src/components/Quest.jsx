import React, { useState } from 'react';
import QuestList from './QuestList';
import RewardsModal from './RewardsModal';

const Quest = () => {
  const [showRewards, setShowRewards] = useState(false);
  const [currentReward, setCurrentReward] = useState({ title: '', description: '', points: 0 });

  const handleQuestCompletion = (reward) => {
    setCurrentReward(reward);
    setShowRewards(true);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-purple-800">Epic Quests Await!</h1>
      <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-purple-300">
        <QuestList onQuestCompletion={handleQuestCompletion} />
      </div>
      <RewardsModal
        show={showRewards}
        onClose={() => setShowRewards(false)}
        reward={currentReward}
      />
    </div>
  );
};

export default Quest;
