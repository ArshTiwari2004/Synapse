import React from 'react';

const Lonavla = () => {
  const handleExport = () => {
    
    alert('Details exported successfully!');
  };

  return (
    <div className="bg-#FFFBFA min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105">
        
        {/* Image Section */}
        <img src={lonavla.jpg} alt="Lonavla" className="w-full h-72 object-cover" />
        
        {/* Content Section */}
        <div className="p-8">
          <h1 className="text-5xl font-extrabold text-#00BD9D mb-6">Lonavla, Maharashtra</h1>
          
          {/* Brief Description */}
          <p className="text-lg text-gray-800 leading-relaxed mb-8">
            Lonavla is a popular hill station located between Mumbai and Pune in Maharashtra. Known for its lush green valleys, misty hills, and serene atmosphere, it's a favorite getaway for those looking to escape the hustle and bustle of city life. The town is famous for its scenic viewpoints, trekking trails, and, of course, its Chikki (traditional sweet).
          </p>

          {/* Location Details */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-#00BD9D mb-3">Location</h2>
            <p className="text-gray-700">
              Latitude: <strong>18.7°N</strong> | Longitude: <strong>73.4°E</strong>
            </p>
            <p className="text-gray-700">State: Maharashtra, India</p>
          </div>

          {/* Nearby Attractions */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-#00BD9D mb-3">Nearby Attractions</h2>
            <ul className="list-disc ml-6 text-gray-800">
              <li><strong>Lohagad Fort</strong> - A popular trekking spot offering breathtaking views of the surrounding hills.</li>
              <li><strong>Bhushi Dam</strong> - Known for its waterfall, this is a perfect picnic spot to relax and unwind.</li>
              <li><strong>Karla Caves</strong> - Ancient Buddhist rock-cut caves that showcase remarkable architectural beauty.</li>
              <li><strong>Tiger's Leap</strong> - A scenic viewpoint that offers a panoramic view of the valley below.</li>
            </ul>
          </div>

          {/* Historical Significance */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-#00BD9D mb-3">Historical Significance</h2>
            <p className="text-gray-800">
              Lonavla’s history is closely tied to the Maratha Empire. The forts around the area were strategic strongholds for the Marathas. Today, Lonavla has become a popular hill station and a retreat for city dwellers, attracting tourists with its natural beauty and rich cultural heritage.
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

export default Lonavla;
