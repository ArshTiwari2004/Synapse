import React from 'react';

const AnejhariCamp = () => {
  const handleExport = () => {
    
    alert('Details exported successfully!');
  };

  return (
    <div className="bg-#FFFBFA min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto bg-gradient-to-b from-mint to-light-green shadow-2xl rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105">
        
        {/* Image Section */}
        <img src="/anejhari.jpg" alt="Anejhari Butterfly Camp" className="w-full h-72 object-cover" />
        
        {/* Content Section */}
        <div className="p-8">
          <h1 className="text-5xl font-extrabold text-emerald-800 mb-6">Anejhari Butterfly Camp, Mookambika Wildlife Sanctuary</h1>
          
          {/* Brief Description */}
          <p className="text-lg text-gray-800 leading-relaxed mb-8 text-bold">
            Anejhari Butterfly Camp, located within the Mookambika Wildlife Sanctuary, is a peaceful haven for nature lovers. The camp is surrounded by dense forests and is home to a wide variety of butterflies, making it a perfect retreat for those looking to enjoy the beauty of nature in a serene environment.
          </p>

          {/* Location Details */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-teal-700 mb-3">Location</h2>
            <p className="text-gray-700 text-bold">
              Latitude: <strong>13.7°N</strong> | Longitude: <strong>74.7°E</strong>
            </p>
            <p className="text-gray-700 text-bold">State: Karnataka, India</p>
          </div>

          {/* Nearby Attractions */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-teal-700 mb-3">Nearby Attractions</h2>
            <ul className="list-disc ml-6 text-gray-800 text-bold">
              <li><strong>Kudlu Teertha Falls</strong> - A mesmerizing waterfall located nearby, perfect for a short trek.</li>
              <li><strong>Mookambika Temple</strong> - A famous temple dedicated to Goddess Mookambika, located within the sanctuary.</li>
              <li><strong>Somashekara Temple</strong> - A serene temple surrounded by nature.</li>
              <li><strong>Nagara Fort</strong> - A historic fort offering great views and surrounded by scenic beauty.</li>
            </ul>
          </div>

          {/* Historical Significance */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-teal-700 mb-3">Historical Significance</h2>
            <p className="text-gray-800 text-bold">
              Although primarily a nature camp, Anejhari Butterfly Camp is situated in a region rich with historical and cultural significance. The nearby Mookambika Temple has been a site of worship for centuries, adding a spiritual element to the area's natural beauty.
            </p>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default AnejhariCamp;
