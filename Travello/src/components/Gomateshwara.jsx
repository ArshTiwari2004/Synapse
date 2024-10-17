import React from 'react';


const Gomateshwara = () => {
  const handleExport = () => {
    
    alert('Details exported successfully!');
  };

  return (
    <div className="bg-#FFFBFA min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto bg-gradient-to-b from-mint to-light-green shadow-2xl rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105">
        
        {/* Image Section */}
        <img src="/g.jpg" alt="Karkala Gomateshwara Statue" className="w-full h-72 object-cover" />
        
        {/* Content Section */}
        <div className="p-8">
          <h1 className="text-5xl font-extrabold text-emerald-800 mb-6">Gomateshwara Statue, Karkala</h1>
          
          {/* Brief Description */}
          <p className="text-lg text-gray-800 leading-relaxed mb-8 text-bold">
            The Gomateshwara Statue in Karkala, Karnataka, is a 42-foot tall monolithic statue of Bahubali, an important figure in Jainism. Located on a hilltop, this impressive statue is a significant pilgrimage site and offers breathtaking views of the surrounding landscape.
          </p>

          {/* Location Details */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-teal-700 mb-3">Location</h2>
            <p className="text-gray-700">
              Latitude: <strong>13.2°N</strong> | Longitude: <strong>74.9°E</strong>
            </p>
            <p className="text-gray-700 text-bold">State: Karnataka, India</p>
          </div>

          {/* Nearby Attractions */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-teal-700 mb-3">Nearby Attractions</h2>
            <ul className="list-disc ml-6 text-gray-800 text-bold">
              <li><strong>Chaturmukha Basadi</strong> - A famous Jain temple known for its four identical entrances and intricate carvings.</li>
              <li><strong>St. Lawrence Basilica</strong> - A renowned Christian pilgrimage site located nearby.</li>
              <li><strong>Kudremukh National Park</strong> - A biodiversity hotspot with rich flora and fauna, great for nature enthusiasts.</li>
              <li><strong>Ramasamudra Lake</strong> - A serene lake located near the statue, perfect for quiet moments by the water.</li>
            </ul>
          </div>

          {/* Historical Significance */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-teal-700 mb-3">Historical Significance</h2>
            <p className="text-gray-800 text-bold">
              The Gomateshwara Statue was erected in the 15th century by King Veera Pandya of the Karkala dynasty. It stands as a testament to the region's deep Jain heritage and is one of the five major Bahubali statues in India, making it an important religious and cultural landmark.
            </p>
          </div>

          
          
        </div>
      </div>
    </div>
  );
};

export default Gomateshwara;
