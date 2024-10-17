import React from 'react';
import KohlapurImage from './kohlapur.jpg';

const Kohlapur = () => {
  const handleExport = () => {
    // Placeholder for export functionality, like generating a PDF
    alert('Details exported successfully!');
  };

  return (
    <div className="bg-#FFFBFA min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105">
        
        {/* Image Section */}
        <img src={KohlapurImage} alt="Kolhapur" className="w-full h-72 object-cover" />
        
        {/* Content Section */}
        <div className="p-8">
          <h1 className="text-5xl font-extrabold text-#00BD9D mb-6">Kolhapur, Maharashtra</h1>
          
          {/* Brief Description */}
          <p className="text-lg text-gray-800 leading-relaxed mb-8">
            Kolhapur is a city known for its vibrant culture and deep historical significance, nestled in the state of Maharashtra. Famous for its stunning temples like the Mahalakshmi Temple, Kolhapur also boasts a rich legacy from the Maratha Empire. Whether you're drawn by its architecture, handicrafts, or natural beauty, Kolhapur promises a memorable journey.
          </p>

          {/* Location Details */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-#00BD9D mb-3">Location</h2>
            <p className="text-gray-700">
              Latitude: <strong>16.7°N</strong> | Longitude: <strong>74.2°E</strong>
            </p>
            <p className="text-gray-700">State: Maharashtra, India</p>
          </div>

          {/* Nearby Attractions */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-#00BD9D mb-3">Nearby Attractions</h2>
            <ul className="list-disc ml-6 text-gray-800">
              <li><strong>Mahalakshmi Temple</strong> - A revered Hindu temple, a must-visit for its spiritual significance.</li>
              <li><strong>Panhala Fort</strong> - Offers panoramic views and is steeped in Maratha history.</li>
              <li><strong>Rankala Lake</strong> - Serene, picturesque, perfect for a quiet evening stroll or boat rides.</li>
              <li><strong>Shalini Palace</strong> - Experience the grandeur of royalty, now transformed into a luxury hotel.</li>
            </ul>
          </div>

          {/* Historical Significance */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-#00BD9D mb-3">Historical Significance</h2>
            <p className="text-gray-800">
              Kolhapur has a glorious history, serving as a prominent seat during the Maratha Empire. Its rulers contributed significantly to the region’s art, architecture, and crafts. Even today, the legacy of the Marathas can be felt in its monuments, festivals, and local culture.
            </p>
          </div>

          {/* Export Button */}
          <div className="text-center">
            <button
              onClick={handleExport}
              className="bg-#49C6E5 hover:bg-#54DEFD text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              Export Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kohlapur;
