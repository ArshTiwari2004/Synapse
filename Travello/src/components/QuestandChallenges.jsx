import React, { useState } from 'react';
import QuestList from './QuestList';
import ChallengeList from './ChallengeList';
import RewardsModal from './RewardsModal';

const QuestsAndChallenges = () => {
  const [showRewards, setShowRewards] = useState(false);
  const [currentReward, setCurrentReward] = useState({ title: '', description: '', points: 0 });

  const handleQuestCompletion = (reward) => {
    setCurrentReward(reward);
    setShowRewards(true);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center mb-8">Quests & Challenges</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <QuestList onQuestCompletion={handleQuestCompletion} />
        <ChallengeList onChallengeCompletion={handleQuestCompletion} />
      </div>
      <RewardsModal
        show={showRewards}
        onClose={() => setShowRewards(false)}
        reward={currentReward}
      />
    </div>
  );
};

export default QuestsAndChallenges;
