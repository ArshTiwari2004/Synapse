import React from 'react';
import GatewayImage from './Gatewayofindia.jpg';

const GatewayofIndia = () => {
  const handleExport = () => {
    
    alert('Details exported successfully!');
  };

  return (
    <div className="bg-#FFFBFA min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105">
        
        {/* Image Section */}
        <img src={GatewayImage} alt="Gateway of India" className="w-full h-72 object-cover" />
        
        {/* Content Section */}
        <div className="p-8">
          <h1 className="text-5xl font-extrabold text-#00BD9D mb-6">Gateway of India, Mumbai</h1>
          
          {/* Brief Description */}
          <p className="text-lg text-gray-800 leading-relaxed mb-8">
            The Gateway of India is one of the most iconic landmarks of Mumbai, standing proudly on the waterfront of the Apollo Bunder area in South Mumbai. Built during the British Raj in 1924, this grand monument was originally constructed to commemorate the visit of King George V and Queen Mary. It has since become a symbol of Mumbai’s history and resilience, welcoming millions of visitors annually.
          </p>

          {/* Location Details */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-#00BD9D mb-3">Location</h2>
            <p className="text-gray-700">
              Latitude: <strong>18.9220°N</strong> | Longitude: <strong>72.8347°E</strong>
            </p>
            <p className="text-gray-700">City: Mumbai, Maharashtra, India</p>
          </div>

          {/* Nearby Attractions */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-#00BD9D mb-3">Nearby Attractions</h2>
            <ul className="list-disc ml-6 text-gray-800">
              <li><strong>Taj Mahal Palace Hotel</strong> - Located right next to the Gateway, this iconic luxury hotel is a historic site in itself.</li>
              <li><strong>Elephanta Caves</strong> - A UNESCO World Heritage Site, accessible by a short ferry ride from the Gateway.</li>
              <li><strong>Marine Drive</strong> - A famous seaside promenade just a short drive away, offering stunning views of the Arabian Sea.</li>
              <li><strong>Chhatrapati Shivaji Maharaj Museum</strong> - A historical museum housing artifacts from India’s rich past, also located nearby.</li>
            </ul>
          </div>

          {/* Historical Significance */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-#00BD9D mb-3">Historical Significance</h2>
            <p className="text-gray-800">
              The Gateway of India holds immense historical significance, as it marked the first point of entry for British officials visiting India. It later became a site of symbolic importance during India's independence, witnessing the departure of the last British troops from the country in 1948. Today, it stands as a reminder of India’s colonial past and the country’s journey to independence.
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

export default GatewayofIndia;
