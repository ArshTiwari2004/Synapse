import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const RewardsModal = ({ show, onClose, reward, experience, setExperience, image, setImage, claimReward }) => {
  const [location, setLocation] = useState({ latitude: '', longitude: '' }); // State for location

  useEffect(() => {
    if (show) {
      // Check if geolocation is available
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude }); // Set the location state
          },
          (error) => {
            console.error("Error getting location:", error);
            toast.error('Unable to retrieve your location.'); // Error handling
          }
        );
      } else {
        toast.error('Geolocation is not supported by this browser.'); // Fallback for unsupported browsers
      }
    }
  }, [show]); // Run this effect when the modal is shown

  if (!show) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!experience || !image) {
      toast.error('Please fill in all fields before claiming your reward!');
      return;
    }
    claimReward(location);
    toast.success('Reward claimed successfully!');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full transform transition-all duration-300 scale-100 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          X
        </button>

        <h2 className="text-2xl font-semibold mb-4 text-teal-900">You're Almost There!</h2>

        {/* Updated reward section to match the modal style */}
        <div className="bg-white border-2 border-teal-400 rounded-lg p-6 mb-6 shadow-lg">
          <h3 className="text-2xl font-semibold mb-2 text-teal-900">{reward.title}</h3>
          <p className="text-xl font-bold text-teal-800">Points to be earned: {reward.points}</p>
        </div>
        <p className="text-teal-800 text-center mb-4">
          Don’t stop now! Complete this last step and the reward is all yours. Keep up the great work!
        </p>

        <form onSubmit={handleSubmit}>
          {/* Experience input */}
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-700">Tell us your experience</label>
            <textarea
              placeholder="Share your experience..."
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="w-full border rounded-lg p-2"
              rows={3}
              required
            />
          </div>

          {/* Location input */}
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-700">Your Current Location</label>
            <div className="flex">
              <input
                type="text"
                placeholder="Latitude"
                value={location.latitude}
                readOnly
                className="w-1/2 border rounded-lg p-2 mr-2"
              />
              <input
                type="text"
                placeholder="Longitude"
                value={location.longitude}
                readOnly
                className="w-1/2 border rounded-lg p-2"
              />
            </div>
          </div>

          {/* Image input */}
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-700">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full border rounded-lg p-2"
              required
            />
          </div>

          {/* Claim button */}
          <button
            type="submit"
            className="w-full py-2 rounded-lg text-white font-semibold bg-teal-700 hover:bg-teal-600 transition duration-300"
          >
            Claim Reward
          </button>
        </form>
      </div>
    </div>
  );
};

export default RewardsModal;
