import React from 'react';
import TypingEffect from 'react-typing-effect';
import { FaMapMarkerAlt, FaGamepad, FaTrophy, FaLock, FaChartBar, FaCompass } from 'react-icons/fa';
import Carousel from './Carousel';

const About = () => {
  return (
    <div className="py-16 text-center bg-off-white mt-8"> {/* Off-white background */}
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-teal-green" id="about-section"> {/* Teal Green heading */}
          About Our Gamified Tourism Platform
        </h2>
        <TypingEffect
          text={['Explore Hidden Gems Like Never Before', 'Transform Your Travels into an Adventure']}
          className="text-2xl font-semibold text-light-blue"  // Light Blue text
        />
        <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
          Our platform is designed to revolutionize the travel experience by guiding you to hidden attractions and cultural experiences through interactive challenges. We integrate gamification with AI-powered personalization to create dynamic itineraries that adapt to your interests and real-time conditions, making every journey a memorable adventure.
        </p>

        {/* Feature Boxes */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Box 1: Hidden Attractions Maps */}
          <div className="bg-blue-200 shadow-lg rounded-lg p-6">
            <FaMapMarkerAlt className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Hidden Attractions Maps</h3>
            <p className="text-gray-700">
              Discover hidden locations and cultural spots with real-time tips based on your geolocation.
            </p>
          </div>

          {/* Box 2: Challenges & Quests */}
          <div className="bg-green-200 shadow-lg rounded-lg p-6">
            <FaGamepad className="text-4xl text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Challenges & Quests</h3>
            <p className="text-gray-700">
              Engage in interactive challenges like photo quests and cultural quizzes, earning rewards as you explore.
            </p>
          </div>

          {/* Box 3: Achievements & Leaderboards */}
          <div className="bg-yellow-200 shadow-lg rounded-lg p-6">
            <FaTrophy className="text-4xl text-yellow-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Achievements & Leaderboards</h3>
            <p className="text-gray-700">
              Track your progress with dynamic leaderboards and earn badges as you complete location-based challenges.
            </p>
          </div>

          {/* Box 4: Social Media Integration */}
          <div className="bg-purple-200 shadow-lg rounded-lg p-6">
            <FaCompass className="text-4xl text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Social Media Integration</h3>
            <p className="text-gray-700">
              Share your travel achievements directly on Instagram, Facebook, and Twitter to inspire fellow travelers.
            </p>
          </div>

          {/* Box 5: Offline Mode */}
          <div className="bg-teal-200 shadow-lg rounded-lg p-6">
            <FaLock className="text-4xl text-teal-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Offline Mode</h3>
            <p className="text-gray-700">
              Download maps and challenges to continue exploring even without internet connectivity.
            </p>
          </div>

          {/* Box 6: Local Culture Immersion */}
          <div className="bg-red-200 shadow-lg rounded-lg p-6">
            <FaChartBar className="text-4xl text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Local Culture Immersion</h3>
            <p className="text-gray-700">
              Immerse yourself in the local culture with personalized AI-driven insights and real-time cultural trivia.
            </p>
          </div>
        </div>
      </div>
      
      {/* Carousel Component */}
      <div className="max-w-4xl mx-auto mt-12 bg-white shadow-lg rounded-lg overflow-hidden">
        <Carousel />
      </div>
    </div>
  );
};

export default About;
