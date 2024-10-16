import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGoogle, FaSnapchat } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
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

  const handleConnect = (platform) => {
    setLinkedAccounts({ ...linkedAccounts, [platform]: true });
    toast.success(`Your ${platform.charAt(0).toUpperCase() + platform.slice(1)} account has been linked with Travello! Happy Travelloing!`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 to-blue-400 flex flex-col items-center justify-center p-6">
      <ToastContainer />
      <h1 className="text-5xl font-bold text-gray-900 mb-6 drop-shadow-lg">Connect Your Social Accounts</h1>
      <p className="text-lg text-gray-900 font-semibold mb-10 text-center max-w-md">
        Stay connected with your friends and share your Travello moments instantly. Happy Travelloing!
      </p>

      <div className="grid grid-cols-2 gap-8 mb-10 md:grid-cols-3 lg:grid-cols-4">
        {/* Social Account Cards */}
        {[
          { platform: 'facebook', icon: <FaFacebook size={60} />, bgColor: 'bg-blue-600', borderColor: 'border-blue-500' },
          { platform: 'twitter', icon: <FaTwitter size={60} />, bgColor: 'bg-blue-400', borderColor: 'border-blue-300' },
          { platform: 'instagram', icon: <FaInstagram size={60} />, bgColor: 'bg-pink-500', borderColor: 'border-pink-400' },
          { platform: 'linkedin', icon: <FaLinkedin size={60} />, bgColor: 'bg-blue-700', borderColor: 'border-blue-600' },
        ].map(({ platform, icon, bgColor, borderColor }) => (
          <div
            key={platform}
            className={`flex flex-col items-center justify-center ${bgColor} text-white p-6 rounded-lg shadow-lg border-4 ${borderColor} transform transition-transform duration-300 hover:scale-105`}
          >
            <div className={`mb-4 p-2 rounded-full ${bgColor} shadow-md`}>
              {icon}
            </div>
            <button
              onClick={() => handleConnect(platform)}
              className={`text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300 hover:bg-opacity-80`}
            >
              Connect {platform.charAt(0).toUpperCase() + platform.slice(1)}
            </button>
          </div>
        ))}
      </div>

      {/* Centering the last two cards with borders and hover effect */}
      <div className="flex justify-center w-full mb-10">
        <div className="flex space-x-8">
          {/* Google Card */}
          <div
            className={`flex flex-col items-center justify-center bg-red-500 text-white p-6 rounded-lg shadow-lg border-4 border-red-600 transform transition-transform duration-300 hover:scale-105`}
          >
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

          {/* Snapchat Card */}
          <div
            className={`flex flex-col items-center justify-center bg-yellow-500 text-white p-6 rounded-lg shadow-lg border-4 border-yellow-600 transform transition-transform duration-300 hover:scale-105`}
          >
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
        className="text-lg text-gray-900 mt-10 font-bold text-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Connect with your friends, share your achievements, and enjoy your journey with Travello!
      </motion.p>
    </div>
  );
};

export default SocialIntegration;
