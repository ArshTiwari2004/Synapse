import React, { useState } from 'react';
import DailyChallenges from './DailyChallenges';
import RegularChallenges from './RegularChallenges';
import RewardsModal from './RewardsModal';

const Challenge = () => {
  const [showRewards, setShowRewards] = useState(false);
  const [currentReward, setCurrentReward] = useState({ title: '', description: '', points: 0 });

  const handleChallengeCompletion = (reward) => {
    setCurrentReward(reward);
    setShowRewards(true);
  };

  return (
    <div className="bg-gradient-to-b from-mint to-light-green py-12">
      <div className="container mx-auto space-y-8 px-4 sm:px-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-teal-800">Daily & Regular Challenges</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <DailyChallenges onChallengeCompletion={handleChallengeCompletion} />
          <RegularChallenges onChallengeCompletion={handleChallengeCompletion} />
        </div>
        <RewardsModal
          show={showRewards}
          onClose={() => setShowRewards(false)}
          reward={currentReward}
        />
      </div>
    </div>
  );
};





export default Challenge;
