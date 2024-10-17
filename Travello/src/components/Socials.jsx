import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGoogle, FaSnapchat } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import axios from 'axios';  // Import Axios
import 'react-toastify/dist/ReactToastify.css';

const SocialIntegration = () => {
  const [linkedAccounts, setLinkedAccounts] = useState({
    facebook: false,
    twitter: false,
    instagram: false,
    linkedin: false,
    google: false,
    snapchat: false,
  });

  const [modal, setModal] = useState({ isOpen: false, platform: '', socialLink: '' });

  const handleConnect = (platform) => {
    setModal({ isOpen: true, platform, socialLink: '' });
  };

  const handleSaveLink = async () => {
    if (modal.socialLink.trim() === '') {
      toast.error('Please enter a valid link!');
      return;
    }

    try {
      const response = await axios.post(
        '/api/user/socialmedia',  // Assuming you have the API base URL configured or using a relative path
        {
          platform: modal.platform,
          link: modal.socialLink,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Include token for authentication
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        setLinkedAccounts({ ...linkedAccounts, [modal.platform]: true });
        toast.success(`Your ${modal.platform.charAt(0).toUpperCase() + modal.platform.slice(1)} account has been linked!`);
      }

    } catch (error) {
      toast.error('Failed to link your social media account. Please try again.');
      console.error(error); // For debugging in the console
    }

    setModal({ isOpen: false, platform: '', socialLink: '' });
  };

  const handleInputChange = (e) => {
    setModal({ ...modal, socialLink: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-mint to-light-green flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-bold text-teal-900 mb-6 drop-shadow-lg">Connect Your Social Accounts</h1>
      <p className="text-lg text-teal-750 font-semibold mb-10 text-center max-w-md">
        Stay connected with your friends and share your Travello moments instantly. Happy Travelloing!
      </p>

      <div className="grid grid-cols-2 gap-8 mb-10 md:grid-cols-3 lg:grid-cols-4">
        {[{ platform: 'facebook', icon: <FaFacebook size={60} />, bgColor: 'bg-blue-600', borderColor: 'border-blue-500' },
          { platform: 'twitter', icon: <FaTwitter size={60} />, bgColor: 'bg-blue-400', borderColor: 'border-blue-300' },
          { platform: 'instagram', icon: <FaInstagram size={60} />, bgColor: 'bg-pink-500', borderColor: 'border-pink-400' },
          { platform: 'linkedin', icon: <FaLinkedin size={60} />, bgColor: 'bg-blue-700', borderColor: 'border-blue-600' },
        ].map(({ platform, icon, bgColor, borderColor }) => (
          <div
            key={platform}
            className={`flex flex-col items-center justify-center ${bgColor} text-white p-6 rounded-lg shadow-lg border-4 ${borderColor} transform transition-transform duration-300 hover:scale-105`}
          >
            <div className={`mb-4 p-2 rounded-full ${bgColor} shadow-md`}>{icon}</div>
            <button
              onClick={() => handleConnect(platform)}
              className={`text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300 hover:bg-opacity-80`}
            >
              Connect {platform.charAt(0).toUpperCase() + platform.slice(1)}
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-center w-full mb-10">
        <div className="flex space-x-8">
          <div className={`flex flex-col items-center justify-center bg-red-500 text-white p-6 rounded-lg shadow-lg border-4 border-red-600 transform transition-transform duration-300 hover:scale-105`}>
            <div className={`mb-4 p-2 rounded-full bg-red-500 shadow-md`}>
              <FaGoogle size={60} />
            </div>
            <button
              onClick={() => handleConnect('google')}
              className={`text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300 hover:bg-opacity-80`}
            >
              Connect Google
            </button>
          </div>

          <div className={`flex flex-col items-center justify-center bg-yellow-500 text-white p-6 rounded-lg shadow-lg border-4 border-yellow-600 transform transition-transform duration-300 hover:scale-105`}>
            <div className={`mb-4 p-2 rounded-full bg-yellow-500 shadow-md`}>
              <FaSnapchat size={60} />
            </div>
            <button
              onClick={() => handleConnect('snapchat')}
              className={`text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300 hover:bg-opacity-80`}
            >
              Connect Snapchat
            </button>
          </div>
        </div>
      </div>

      <motion.p
        className="text-lg text-teal-800 mt-10 font-bold text-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Connect with your friends, share your achievements, and enjoy your journey with Travello!
      </motion.p>

      {modal.isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-2xl font-bold mb-4">Link your {modal.platform.charAt(0).toUpperCase() + modal.platform.slice(1)} Account</h2>
            <input
              type="text"
              value={modal.socialLink}
              onChange={handleInputChange}
              placeholder="Enter your profile link"
              className="w-full p-2 border border-gray-300 rounded-lg mb-4"
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setModal({ isOpen: false, platform: '', socialLink: '' })}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveLink}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialIntegration;
