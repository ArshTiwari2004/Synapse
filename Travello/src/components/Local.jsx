import React, { useEffect, useState } from 'react';
import { useNavigate, Routes, Route, Link } from 'react-router-dom';

const LocationRedirect = () => {
  const [location, setLocation] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const predefinedLocations = ['Udupi', 'Delhi', 'Bangalore', 'Mumbai'];

  const handleLocationDetection = (detectedLocation) => {
    if (predefinedLocations.includes(detectedLocation)) {
      setLocation(detectedLocation);
    }
  };

   useEffect(() => {
     if (location) {
      navigate(`/${location.toLowerCase()}`);
    
       window.location.reload();
     }
  }, [location, navigate]);

  return (
    <div className="flex flex-col items-center mt-10">
      <button
        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md shadow-md transition duration-300"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        Start Your Journey
      </button>
      {showDropdown && (
        <div className="mt-4 w-64 bg-white p-4 shadow-lg rounded-lg">
          <label htmlFor="location-select" className="block text-lg font-medium text-gray-700 mb-2">
            Choose a Location:
          </label>
          <select
            id="location-select"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={(e) => handleLocationDetection(e.target.value)}
            defaultValue=""
          >
            <option value="" disabled>
              Select a location
            </option>
            {predefinedLocations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>
      )}
      {location ? (
        <p className="mt-4 text-lg text-green-600">Redirecting to {location} page...</p>
      ) : (
        <p className="mt-4 text-lg text-gray-500">Please select a location to start your journey...</p>
      )}
    </div>
  );
};

const UdupiPage = () => <h2 className="text-2xl font-bold">Welcome to Udupi!</h2>;
const DelhiPage = () => <h2 className="text-2xl font-bold">Welcome to Delhi!</h2>;
const BangalorePage = () => <h2 className="text-2xl font-bold">Welcome to Bangalore!</h2>;
const MumbaiPage = () => <h2 className="text-2xl font-bold">Welcome to Mumbai!</h2>;

const Local = () => {
  return (
    <div className="container mx-auto p-4">
      <nav className="bg-gray-800 p-4 rounded-lg shadow-lg mb-8">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          {/* <li>
            <Link to="/localculture" className="text-white hover:text-gray-300">
              Udupi
            </Link>
          </li>
          <li>
            <Link to="/delhi" className="text-white hover:text-gray-300">
              Delhi
            </Link>
          </li>
          <li>
            <Link to="/bangalore" className="text-white hover:text-gray-300">
              Bangalore
            </Link>
          </li>
          <li>
            <Link to="/mumbai" className="text-white hover:text-gray-300">
              Mumbai
            </Link>
          </li> */}
        </ul>
      </nav>

      <Routes>
        <Route path="/localculture" element={<UdupiPage />} />
        <Route path="/delhi" element={<DelhiPage />} />
        <Route path="/bangalore" element={<BangalorePage />} />
        <Route path="/mumbai" element={<MumbaiPage />} />
        <Route path="/" element={<LocationRedirect />} />
      </Routes>
    </div>
  );
};

export default Local;
