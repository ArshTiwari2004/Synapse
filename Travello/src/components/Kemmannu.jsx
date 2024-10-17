import React from 'react';


const KemmannuBridge = () => {
  const handleExport = () => {
    
    alert('Details exported successfully!');
  };

  return (
    <div className="bg-#FFFBFA min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105">
        
        {/* Image Section */}
        <img src={kbridge.jpg} alt="Kemmannu Hanging Bridge" className="w-full h-72 object-cover" />
        
        {/* Content Section */}
        <div className="p-8">
          <h1 className="text-5xl font-extrabold text-#00BD9D mb-6">Kemmannu Hanging Bridge, Udupi</h1>
          
          {/* Brief Description */}
          <p className="text-lg text-gray-800 leading-relaxed mb-8">
            The Kemmannu Hanging Bridge is a quaint suspension bridge located near Udupi, Karnataka. It stretches over the serene Suvarna River and is surrounded by lush coconut plantations. The bridge offers a peaceful escape and beautiful scenic views, making it a perfect spot for nature lovers and photography enthusiasts.
          </p>

          {/* Location Details */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-#00BD9D mb-3">Location</h2>
            <p className="text-gray-700">
              Latitude: <strong>13.4°N</strong> | Longitude: <strong>74.7°E</strong>
            </p>
            <p className="text-gray-700">State: Karnataka, India</p>
          </div>

          {/* Nearby Attractions */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-#00BD9D mb-3">Nearby Attractions</h2>
            <ul className="list-disc ml-6 text-gray-800">
              <li><strong>St. Mary’s Island</strong> - Known for its unique rock formations and picturesque beaches.</li>
              <li><strong>Delta Beach</strong> - A tranquil beach where the river meets the sea, ideal for relaxing sunsets.</li>
              <li><strong>Kodi Bengre</strong> - A small fishing village offering beautiful views of the Arabian Sea.</li>
              <li><strong>Hoode Beach</strong> - A lesser-known beach, perfect for quiet walks and peaceful retreats.</li>
            </ul>
          </div>

          {/* Historical Significance */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-#00BD9D mb-3">Historical Significance</h2>
            <p className="text-gray-800">
              The Kemmannu Hanging Bridge was initially built to help the local villagers cross the Suvarna River. Today, it serves not just as a connection between communities but also as a popular spot for tourists and photography enthusiasts due to its picturesque surroundings and unique design.
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

export default KemmannuBridge;
