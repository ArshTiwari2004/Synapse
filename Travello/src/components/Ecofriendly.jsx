import React, { useState } from 'react';
import { Bus, Train, Bike, PersonStanding, Zap, X, Upload } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";

const EcoFriendlyPage = () => {
  const [points, setPoints] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMode, setSelectedMode] = useState(null);
  const [travelDetails, setTravelDetails] = useState({
    from: '',
    to: '',
    distance: '',
    startTime: '',
    endTime: '',
    ticketImage: null,
  });

  const addPoints = (mode, distance) => {
    let pointsPerKm = 0;
    switch (mode) {
      case 'train':
        pointsPerKm = 120;
        break;
      case 'bus':
        pointsPerKm = 80;
        break;
      case 'bicycle':
        pointsPerKm = 150;
        break;
      case 'walking':
        pointsPerKm = 150;
        break;
      case 'electricCar':
        pointsPerKm = 90;
        break;
      default:
        pointsPerKm = 0;
    }
    const earnedPoints = Math.round(pointsPerKm * distance);
    setPoints(points + earnedPoints);
    return earnedPoints;
  };

  const handleModeSelect = (mode) => {
    setSelectedMode(mode);
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    setTravelDetails({ ...travelDetails, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (e) => {
    setTravelDetails({ ...travelDetails, ticketImage: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const earnedPoints = addPoints(selectedMode, parseFloat(travelDetails.distance));
    // Here you would typically send this data to a backend for verification
    console.log('Travel details submitted:', { ...travelDetails, mode: selectedMode, earnedPoints });
    setIsModalOpen(false);
    setTravelDetails({ from: '', to: '', distance: '', startTime: '', endTime: '', ticketImage: null });
  };

  const renderIcon = (mode) => {
    switch (mode) {
      case 'train': return <Train size={40} />;
      case 'bus': return <Bus size={40} />;
      case 'bicycle': return <Bike size={40} />;
      case 'walking': return <PersonStanding size={40} />;
      case 'electricCar': return <Zap size={40} />;
      default: return null;
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="bg-gradient-to-b from-mint to-light-green min-h-screen p-10">
      <h1 className="text-3xl font-bold text-teal-800 mb-6 text-center">Eco-Friendly Travel Options</h1>

      <Slider {...settings}>
        <div className="p-3">
          <img 
            src="train.jpeg" 
            alt="Train Travel" 
            className="rounded-lg w-full h-48 object-cover shadow-md" 
          />
          <h2 className="text-xl text-teal-800 font-bold mt-2">Travel by Train</h2>
          <p className="text-gray-600">Earn 2 points per km</p>
        </div>
        <div className="p-3">
          <img 
            src="bus.jpg" 
            alt="Bus Travel" 
            className="rounded-lg w-full h-48 object-cover shadow-md" 
          />
          <h2 className="text-xl text-teal-800 font-bold mt-2">Travel by Bus</h2>
          <p className="text-gray-600">Earn 1.5 points per km</p>
        </div>
        <div className="p-3">
          <img 
            src="bicycle.jpeg" 
            alt="Bicycle Travel" 
            className="rounded-lg w-full h-48 object-cover shadow-md" 
          />
          <h2 className="text-xl text-teal-800 font-bold mt-2">Ride a Bicycle</h2>
          <p className="text-gray-600">Earn 3 points per km</p>
        </div>
        <div className="p-3">
          <img 
            src="walk.jpg" 
            alt="Walking" 
            className="rounded-lg w-full h-48 object-cover shadow-md" 
          />
          <h2 className="text-xl text-teal-800 font-bold mt-2">Walk</h2>
          <p className="text-gray-600">Earn 4 points per km</p>
        </div>
        <div className="p-3">
          <img 
            src="ev.png" 
            alt="Electric Car" 
            className="rounded-lg w-full h-48 object-cover shadow-md" 
          />
          <h2 className="text-xl text-teal-800 font-bold mt-2">Electric Vehicle</h2>
          <p className="text-gray-600">Earn 1 point per km</p>
        </div>
      </Slider>

      <div className="flex justify-around mt-10">
        {['train', 'bus', 'bicycle', 'walking', 'electricCar'].map((mode) => (
          <button
            key={mode}
            onClick={() => handleModeSelect(mode)}
            className="bg-teal-300 p-5 rounded-md flex flex-col items-center gap-2 hover:bg-teal-400 transition-colors"
          >
            {renderIcon(mode)}
            <span className="text-sm font-semibold">{mode.charAt(0).toUpperCase() + mode.slice(1)}</span>
          </button>
        ))}
      </div>

      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold text-sky-blue">Your Points: {points}</h2>
        <p className="text-gray-700 mt-2 text-lg">
          Earn points by choosing eco-friendly travel options! Higher points mean better rewards.
        </p>
        <div className="flex justify-center mt-4">

          {points >= 200 && <div className="badge bg-brown-600 text-teal-900 p-2 rounded-full ">Bronze Badge</div>}
          {points >= 400 && <div className="badge bg-silver-600 text-teal-900 p-2 rounded-full ml-2">Silver Badge</div>}
          {points >= 600 && <div className="badge bg-yellow-600 text-teal-900 p-2 rounded-full ml-2">Gold Badge</div>}

          
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Log Your {selectedMode.charAt(0).toUpperCase() + selectedMode.slice(1)} Trip</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="from" className="block text-sm font-medium text-gray-700">From</label>
                <input type="text" id="from" name="from" value={travelDetails.from} onChange={handleInputChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50" />
              </div>
              <div>
                <label htmlFor="to" className="block text-sm font-medium text-gray-700">To</label>
                <input type="text" id="to" name="to" value={travelDetails.to} onChange={handleInputChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50" />
              </div>
              <div>
                <label htmlFor="distance" className="block text-sm font-medium text-gray-700">Distance (km)</label>
                <input type="number" id="distance" name="distance" value={travelDetails.distance} onChange={handleInputChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50" />
              </div>
              <div>
                <label htmlFor="startTime" className="block text-sm font-medium text-gray-700">Start Time</label>
                <input type="datetime-local" id="startTime" name="startTime" value={travelDetails.startTime} onChange={handleInputChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50" />
              </div>
              <div>
                <label htmlFor="endTime" className="block text-sm font-medium text-gray-700">End Time</label>
                <input type="datetime-local" id="endTime" name="endTime" value={travelDetails.endTime} onChange={handleInputChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50" />
              </div>
              {(selectedMode === 'train' || selectedMode === 'bus') && (
                <div>
                  <label htmlFor="ticketUpload" className="block text-sm font-medium text-gray-700">Upload Ticket</label>
                  <div className="mt-1 flex items-center">
                    <label htmlFor="ticketUpload" className="cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                      <Upload size={16} className="inline mr-2" />
                      Choose file
                    </label>
                    <input id="ticketUpload" name="ticketUpload" type="file" onChange={handleFileUpload} className="sr-only" />
                    {travelDetails.ticketImage && <span className="ml-3 text-sm text-gray-500">{travelDetails.ticketImage.name}</span>}
                  </div>
                </div>
              )}
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                Log Trip
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EcoFriendlyPage;