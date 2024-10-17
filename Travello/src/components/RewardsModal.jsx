import React from 'react';
import { toast } from 'react-hot-toast'; 

const RewardsModal = ({ show, onClose, reward, experience, setExperience, image, setImage, setShowConfetti,claimReward }) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full transform transition-all duration-300 scale-100 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-xl"
        >
          X
        </button>
        <h2 className="text-3xl font-bold mb-4 text-indigo-700">Congratulations!</h2>
        <p className="text-xl mb-6 text-gray-700">You've earned an awesome reward:</p>

        <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 border-2 border-yellow-400 rounded-lg p-6 mb-6 shadow-lg">
          <h3 className="text-2xl font-semibold mb-2 text-indigo-800">{reward.title}</h3>
          <p className="text-xl font-bold text-indigo-700">Points earned: {reward.points}</p>
        </div>

        <textarea
          placeholder="Tell us your experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          className="border rounded p-2 mb-2 w-full"
          rows={3}
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="border rounded p-2 mb-2 w-full"
        />

        <div className="flex justify-center">
          <button
            onClick={claimReward}
            className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors duration-200"
          >
            Claim Reward
          </button>
        </div>
      </div>
    </div>
  );
};

export default RewardsModal;
