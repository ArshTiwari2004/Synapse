import React from 'react';


const Kohlapur = () => {
  const handleExport = () => {
    // Placeholder for export functionality, like generating a PDF
    alert('Details exported successfully!');
  };

  return (
    <div className="bg-#FFFBFA min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto bg-gradient-to-b from-mint to-light-green shadow-2xl rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105">
        
        {/* Image Section */}
        <img src="/kohlapur.jpg" alt="Kolhapur" className="w-full h-72 object-cover" />
        
        {/* Content Section */}
        <div className="p-8">
          <h1 className="text-5xl font-extrabold text-emerald-800  mb-6">Kolhapur, Maharashtra</h1>
          
          {/* Brief Description */}
          <p className="text-lg text-gray-800 leading-relaxed mb-8 text-bold ">
            Kolhapur is a city known for its vibrant culture and deep historical significance, nestled in the state of Maharashtra. Famous for its stunning temples like the Mahalakshmi Temple, Kolhapur also boasts a rich legacy from the Maratha Empire. Whether you're drawn by its architecture, handicrafts, or natural beauty, Kolhapur promises a memorable journey.
          </p>

          {/* Location Details */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-teal-700 mb-3">Location</h2>
            <p className="text-gray-700">
              Latitude: <strong>16.7°N</strong> | Longitude: <strong>74.2°E</strong>
            </p>
            <p className="text-gray-700 text-bold">State: Maharashtra, India</p>
          </div>

          {/* Nearby Attractions */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-teal-700 mb-3">Nearby Attractions</h2>
            <ul className="list-disc ml-6 text-gray-800 text-bold">
              <li><strong>Mahalakshmi Temple</strong> - A revered Hindu temple, a must-visit for its spiritual significance.</li>
              <li><strong>Panhala Fort</strong> - Offers panoramic views and is steeped in Maratha history.</li>
              <li><strong>Rankala Lake</strong> - Serene, picturesque, perfect for a quiet evening stroll or boat rides.</li>
              <li><strong>Shalini Palace</strong> - Experience the grandeur of royalty, now transformed into a luxury hotel.</li>
            </ul>
          </div>

          {/* Historical Significance */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-teal-700 mb-3">Historical Significance</h2>
            <p className="text-gray-800 text-bold">
              Kolhapur has a glorious history, serving as a prominent seat during the Maratha Empire. Its rulers contributed significantly to the region’s art, architecture, and crafts. Even today, the legacy of the Marathas can be felt in its monuments, festivals, and local culture.
            </p>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Kohlapur;
