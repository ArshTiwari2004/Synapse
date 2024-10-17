import React from 'react';
import AjantaImage from './Ajantacaves.jpg';

const Ajanta = () => {
  const handleExport = () => {
    
    alert('Details exported successfully!');
  };

  return (
    <div className="bg-#FFFBFA min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105">
        
        {/* Image Section */}
        <img src={AjantaImage} alt="Ajanta Caves" className="w-full h-72 object-cover" />
        
        {/* Content Section */}
        <div className="p-8">
          <h1 className="text-5xl font-extrabold text-#00BD9D mb-6">Ajanta Caves, Maharashtra</h1>
          
          {/* Brief Description */}
          <p className="text-lg text-gray-800 leading-relaxed mb-8">
            The Ajanta Caves are a series of 29 rock-cut Buddhist cave monuments dating from the 2nd century BCE to about 480 CE, located in the Aurangabad district of Maharashtra, India. These caves are famous for their stunning murals, paintings, and sculptures that depict the life of Buddha and Buddhist traditions, offering a glimpse into the rich cultural history of ancient India.
          </p>

          {/* Location Details */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-#00BD9D mb-3">Location</h2>
            <p className="text-gray-700">
              Latitude: <strong>20.5523°N</strong> | Longitude: <strong>75.7033°E</strong>
            </p>
            <p className="text-gray-700">State: Maharashtra, India</p>
          </div>

          {/* Nearby Attractions */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-#00BD9D mb-3">Nearby Attractions</h2>
            <ul className="list-disc ml-6 text-gray-800">
              <li><strong>Ellora Caves</strong> - Another set of stunning rock-cut caves, just a short distance from Ajanta, featuring Hindu, Buddhist, and Jain temples.</li>
              <li><strong>Daulatabad Fort</strong> - A historical fort that offers panoramic views and a deep dive into medieval Indian history.</li>
              <li><strong>Bibi Ka Maqbara</strong> - A beautiful Mughal-era structure resembling the Taj Mahal, located in Aurangabad.</li>
              <li><strong>Grishneshwar Temple</strong> - One of the twelve Jyotirlinga shrines of Lord Shiva, situated near Ellora.</li>
            </ul>
          </div>

          {/* Historical Significance */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-#00BD9D mb-3">Historical Significance</h2>
            <p className="text-gray-800">
              The Ajanta Caves are a UNESCO World Heritage Site and stand as a testimony to the artistic and architectural brilliance of ancient India. The caves were hidden for centuries and were rediscovered by a British officer in 1819. They are a treasure trove of Buddhist art, showcasing the evolution of Buddhist religious thought, as well as the socio-political conditions of ancient India.
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

export default Ajanta;
