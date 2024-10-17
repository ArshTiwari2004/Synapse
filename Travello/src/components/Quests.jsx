import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import Confetti from 'react-confetti';
import { MapPin, Camera, Trophy } from 'lucide-react';
import RewardsModal from './RewardsModal';
import { Map, Marker } from 'react-map-gl'; 
import { toast } from 'react-hot-toast'; 

const MAPBOX_TOKEN = 'YOUR_MAPBOX_TOKEN_HERE';

const Quests = () => {
  const [quests, setQuests] = useState([
    {
      id: 1,
      title: "Capture the Sunset",
      description: "Take a photo of the sunset from the city's highest point.",
      details: "Find the best spot and capture the beauty of the sunset. Share it with your friends!",
      type: 'photo',
      points: 50,
      completed: false,
    },
    {
      id: 2,
      title: "Hidden Gem Discovery",
      description: "Find and check-in at the secret garden in the old town.",
      details: "Explore the old town to find the hidden garden and take a photo there.",
      type: 'location',
      points: 75,
      completed: false,
      location: [-122.4194, 37.7749],
    },
    {
      id: 3,
      title: "Local Cuisine Challenge",
      description: "Try 5 different local dishes and rate them.",
      details: "Explore local eateries and enjoy the diverse flavors. Rate each dish to share your experience.",
      type: 'challenge',
      points: 100,
      completed: false,
    },
    {
      id: 4,
      title: "Nature Walk",
      description: "Walk 5 km in the nearest nature park and take a photo of a rare flower.",
      details: "Enjoy the beauty of nature and capture a rare flower in your photo.",
      type: 'photo',
      points: 60,
      completed: false,
    },
    {
      id: 5,
      title: "Historic Landmark Hunt",
      description: "Visit three historical landmarks in your city and learn about their history.",
      details: "Research and discover the history of each landmark as you visit them.",
      type: 'location',
      points: 80,
      completed: false,
      location: [-73.935242, 40.730610], // Example coordinates (New York City)
    },
    {
      id: 6,
      title: "Street Art Challenge",
      description: "Find and photograph the most vibrant street art in town.",
      details: "Explore the city to discover stunning street art. Share your favorite pieces!",
      type: 'photo',
      points: 70,
      completed: false,
    },
    {
      id: 7,
      title: "Fitness Frenzy",
      description: "Complete 100 push-ups, 100 sit-ups, and a 10 km run in a day.",
      details: "Challenge yourself physically and track your progress throughout the day.",
      type: 'challenge',
      points: 120,
      completed: false,
    },
    {
      id: 8,
      title: "Museum Exploration",
      description: "Visit a local museum and find out about its most famous exhibit.",
      details: "Immerse yourself in art and history. Share what you learned with friends!",
      type: 'location',
      points: 90,
      completed: false,
      location: [-0.127758, 51.507351], 
    },
  ]);

  const [showConfetti, setShowConfetti] = useState(false);
  const [selectedQuest, setSelectedQuest] = useState(null); 
  const [showRewardsModal, setShowRewardsModal] = useState(false); 
  const [reward, setReward] = useState({ title: '', description: '', points: 0 });
  const [experience, setExperience] = useState('');
  const [image, setImage] = useState(null);
  const [groupName, setGroupName] = useState('');
  const [groupMembers, setGroupMembers] = useState([]);

  const questAnimation = useSpring({
    opacity: selectedQuest ? 1 : 0,
    transform: selectedQuest ? 'translateY(0)' : 'translateY(50px)',
  });

  const selectQuest = (id) => {
    const quest = quests.find(q => q.id === id);
    setSelectedQuest(quest);
  };

  const onClose = ()=>{
    setShowRewardsModal(false);
    setShowConfetti(false)
  }

  const handleClaimReward = () => {
    const newReward = {
      title: `Reward for ${selectedQuest.title}`,
      description: selectedQuest.details,
      points: selectedQuest.points,
    };

    setReward(newReward);
    setShowRewardsModal(true); 
  };

  const claimReward = () => {
    if (!experience || !image) {
      toast.error('Please fill in all fields before claiming your reward!');
      return;
    }
    setQuests(quests.map(quest =>
      quest.id === selectedQuest.id ? { ...quest, completed: true } : quest
    ));
    setShowRewardsModal(false);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const createGroup = () => {
    alert(`Group "${groupName}" created with members: ${groupMembers.join(', ')}`);
    setGroupName('');
    setGroupMembers([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-indigo-800">Adventure Quests</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="bg-white rounded-lg shadow-lg p-6 overflow-y-auto max-h-[70vh]">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-700">Available Quests</h2>
          {quests.map(quest => (
            <div
              key={quest.id}
              className={`mb-4 p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                quest.completed
                  ? 'bg-green-100 border-green-300'
                  : 'bg-indigo-50 border-indigo-200 hover:bg-indigo-100'
              } border-2`}
              onClick={() => selectQuest(quest.id)} 
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-indigo-800">{quest.title}</h3>
                <span className="flex items-center text-indigo-600">
                  {quest.type === 'photo' && <Camera className="mr-1" size={18} />}
                  {quest.type === 'location' && <MapPin className="mr-1" size={18} />}
                  {quest.type === 'challenge' && <Trophy className="mr-1" size={18} />}
                  {quest.points} pts
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-1">{quest.description}</p>
              {quest.completed && (
                <span className="inline-block bg-green-500 text-white text-xs px-2 py-1 rounded mt-2">
                  Completed
                </span>
              )}
            </div>
          ))}
        </div>
        
        {/* Quest Details */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-700">Quest Details</h2>
          {selectedQuest ? (
            <animated.div style={questAnimation}>
              <h3 className="text-xl font-medium text-indigo-800 mb-2">{selectedQuest.title} - Details</h3>
              <p className="text-gray-600 mb-4">{selectedQuest.description}</p>
              <p className="text-gray-600 mb-4">
                To complete this quest, you need to: {selectedQuest.details}
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-indigo-600 font-medium">
                  {selectedQuest.points} points
                </span>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  selectedQuest.type === 'photo' ? 'bg-yellow-100 text-yellow-800' :
                  selectedQuest.type === 'location' ? 'bg-blue-100 text-blue-800' :
                  'bg-purple-100 text-purple-800'
                }`}>
                  {selectedQuest.type.charAt(0).toUpperCase() + selectedQuest.type.slice(1)}
                </span>
              </div>
              <button
                onClick={handleClaimReward}
                className={`w-full py-2 rounded-lg text-white font-semibold transition duration-300 ${
                  selectedQuest.completed ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
                }`}
                disabled={selectedQuest.completed}
              >
                {selectedQuest.completed ? 'Completed' : 'Claim Reward'}
              </button>
            </animated.div>
          ) : (
            <p className="text-gray-600">Select a quest to see details.</p>
          )}
        </div>
      </div>

      {showConfetti && <Confetti />}

      <RewardsModal
        show={showRewardsModal}
        onClose={onClose}
        claimReward = {claimReward}
        reward={reward}
        experience={experience}
        setExperience={setExperience}
        image={image}
        setImage={setImage}
      />
      <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-700">Create a Group Quest</h2>
        <div className="flex flex-col mb-4">
          <input
            type="text"
            placeholder="Group Name"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            className="border border-gray-300 rounded p-2 mb-2"
          />
          <input
            type="text"
            placeholder="Add Members (comma separated)"
            value={groupMembers.join(', ')}
            onChange={(e) => setGroupMembers(e.target.value.split(','))}
            className="border border-gray-300 rounded p-2"
          />
        </div>
        <button
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
          onClick={createGroup}
        >
          Create Group
        </button>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-indigo-700">Map View</h2>
        <Map
          initialViewState={{
            longitude: -122.4194,
            latitude: 37.7749,
            zoom: 10,
          }}
          style={{ width: '100%', height: '400px' }}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxAccessToken={MAPBOX_TOKEN}
        >
          {quests.filter(quest => quest.location).map(quest => (
            <Marker key={quest.id} longitude={quest.location[0]} latitude={quest.location[1]}>
              <div className="bg-indigo-600 text-white p-1 rounded">
                {quest.title}
              </div>
            </Marker>
          ))}
        </Map>
      </div>
    </div>
  );
};

export default Quests;
