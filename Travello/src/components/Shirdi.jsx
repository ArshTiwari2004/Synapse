import React from 'react';

const Shirdi = () => {
  const handleExport = () => {
    
    alert('Details exported successfully!');
  };

  return (
    <div className="bg-#FFFBFA min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105">
        
        {/* Image Section */}
        <img src={shirdi.jpg} alt="Shirdi" className="w-full h-72 object-cover" />
        
        {/* Content Section */}
        <div className="p-8">
          <h1 className="text-5xl font-extrabold text-#00BD9D mb-6">Shirdi, Maharashtra</h1>
          
          {/* Brief Description */}
          <p className="text-lg text-gray-800 leading-relaxed mb-8">
            Shirdi is a small town located in the state of Maharashtra, renowned as the home of the revered saint, Sai Baba. Thousands of devotees from across the world visit Shirdi every year to seek the blessings of Sai Baba at the famous Shirdi Sai Baba temple. This town is filled with spiritual energy, offering a peaceful retreat for pilgrims.
          </p>

          {/* Location Details */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-#00BD9D mb-3">Location</h2>
            <p className="text-gray-700">
              Latitude: <strong>19.8°N</strong> | Longitude: <strong>74.4°E</strong>
            </p>
            <p className="text-gray-700">State: Maharashtra, India</p>
          </div>

          {/* Nearby Attractions */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-#00BD9D mb-3">Nearby Attractions</h2>
            <ul className="list-disc ml-6 text-gray-800">
              <li><strong>Shirdi Sai Baba Temple</strong> - The main attraction, this temple is where devotees come to offer prayers and seek blessings.</li>
              <li><strong>Dwarkamai</strong> - A mosque where Sai Baba spent a significant part of his life, now an important pilgrimage site.</li>
              <li><strong>Chavadi</strong> - This is where Sai Baba used to sleep, and it holds a lot of historical significance for followers.</li>
              <li><strong>Shani Shingnapur</strong> - Located nearby, it is famous for the temple dedicated to Lord Shani, the Hindu god of justice.</li>
            </ul>
          </div>

          {/* Historical Significance */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-#00BD9D mb-3">Historical Significance</h2>
            <p className="text-gray-800">
              Shirdi holds deep religious and historical importance due to its connection with Sai Baba. His teachings of love, forgiveness, and unity have attracted millions of followers worldwide. The town has grown into a major pilgrimage destination, where people come not only to visit the temple but also to experience the spiritual legacy of Sai Baba.
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

export default Shirdi;
