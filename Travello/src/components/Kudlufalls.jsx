import React from 'react';


const KudluTeertha = () => {
  const handleExport = () => {
    alert('Details exported successfully!');
  };

  return (
    <div className="bg-#FFFBFA min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105">
        
        {/* Image Section */}
        <img src={kudlufall.jpg} alt="Kudlu Teertha Falls" className="w-full h-72 object-cover" />
        
        {/* Content Section */}
        <div className="p-8">
          <h1 className="text-5xl font-extrabold text-#00BD9D mb-6">Kudlu Teertha Falls, Karnataka</h1>
          
          {/* Brief Description */}
          <p className="text-lg text-gray-800 leading-relaxed mb-8">
            Kudlu Teertha Falls is a hidden gem nestled in the forests of Udupi, Karnataka. This mesmerizing waterfall cascades from a height of about 300 feet, surrounded by lush greenery. It's a peaceful retreat for nature lovers, with a short trek through the wilderness adding to the adventure.
          </p>

          {/* Location Details */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-#00BD9D mb-3">Location</h2>
            <p className="text-gray-700">
              Latitude: <strong>13.4°N</strong> | Longitude: <strong>74.9°E</strong>
            </p>
            <p className="text-gray-700">State: Karnataka, India</p>
          </div>

          {/* Nearby Attractions */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-#00BD9D mb-3">Nearby Attractions</h2>
            <ul className="list-disc ml-6 text-gray-800">
              <li><strong>Anejhari Butterfly Camp</strong> - A serene spot to witness a variety of butterflies in their natural habitat.</li>
              <li><strong>Kodachadri Peak</strong> - A trekking destination offering panoramic views of the Western Ghats.</li>
              <li><strong>Agumbe Rainforest</strong> - Known for its rich biodiversity and scenic beauty, perfect for nature lovers.</li>
              <li><strong>Someshwara Wildlife Sanctuary</strong> - A wildlife sanctuary teeming with diverse flora and fauna.</li>
            </ul>
          </div>

          {/* Historical Significance */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-#00BD9D mb-3">Trekking Significance</h2>
            <p className="text-gray-800">
              Kudlu Teertha Falls is renowned for its trekking trail. The journey through dense forests and rough terrain adds an adventurous touch to the visit. The peaceful atmosphere and the unspoiled beauty of the waterfall make it a perfect destination for trekkers and nature enthusiasts alike.
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

export default KudluTeertha;
