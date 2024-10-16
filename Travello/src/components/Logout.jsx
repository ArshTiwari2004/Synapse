import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the token from localStorage
    navigate('/'); 
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 border border-emerald-900 text-emerald-900 bg-white rounded-lg transition duration-300 hover:bg-emerald-900 hover:text-white"
    >
      Log Out
    </button>
  );
};

export default Logout;
