import React, { useState } from 'react';
import { FaBus, FaTrain, FaBicycle, FaWalking, FaTree } from 'react-icons/fa'; // Icons
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick"; // Carousel

const EcoFriendlyPage = () => {
  const [points, setPoints] = useState(0);

  // Logic to add points based on travel mode
  const addPoints = (mode) => {
    let earnedPoints = 0;
    switch (mode) {
      case 'train':
        earnedPoints = 100;
        break;
      case 'bus':
        earnedPoints = 80;
        break;
      case 'bicycle':
        earnedPoints = 150;
        break;
      case 'walking':
        earnedPoints = 200;
        break;
      case 'electricCar':
        earnedPoints = 50;
        break;
      default:
        earnedPoints = 0;
    }
    setPoints(points + earnedPoints);
  };

  // Carousel settings for eco-friendly tips
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="bg-#fffbfa min-h-screen p-10">
      <h1 className="text-3xl font-bold text-#00bd9d mb-6 text-center">Eco-Friendly Travel Options</h1>

      {/* Carousel */}
      <Slider {...settings}>
        <div className="p-4">
          <img src="train.jpeg" alt="Train Travel" className="rounded-lg" />
          <h2 className="text-xl text-#54defd mt-2">Travel by Train</h2>
          <p className="text-gray-600">Earn 100 points</p>
        </div>
        <div className="p-4">
          <img src="bus.jpeg" alt="Bus Travel" className="rounded-lg" />
          <h2 className="text-xl text-#54defd mt-2">Travel by Bus</h2>
          <p className="text-gray-600">Earn 80 points</p>
        </div>
        <div className="p-4">
          <img src="bicycle.jpeg" alt="Bicycle Travel" className="rounded-lg" />
          <h2 className="text-xl text-#54defd mt-2">Ride a Bicycle</h2>
          <p className="text-gray-600">Earn 150 points</p>
        </div>
        <div className="p-4">
          <img src="walk.jpg" alt="Walking" className="rounded-lg" />
          <h2 className="text-xl text-#54defd mt-2">Walk</h2>
          <p className="text-gray-600">Earn 200 points</p>
        </div>
        <div className="p-4">
          <img src="av.png" alt="Electric Car" className="rounded-lg" />
          <h2 className="text-xl text-#54defd mt-2">Electric Vehicle</h2>
          <p className="text-gray-600">Earn 50 points</p>
        </div>
      </Slider>

      {/* Icons for Travel Options */}
      <div className="flex justify-around mt-10">
        <button onClick={() => addPoints('train')} className="bg-#49c6e5 p-4 rounded-lg flex items-center gap-2">
          <FaTrain size={24} />
          <span>Train</span>
        </button>
        <button onClick={() => addPoints('bus')} className="bg-#49c6e5 p-4 rounded-lg flex items-center gap-2">
          <FaBus size={24} />
          <span>Bus</span>
        </button>
        <button onClick={() => addPoints('bicycle')} className="bg-#49c6e5 p-4 rounded-lg flex items-center gap-2">
          <FaBicycle size={24} />
          <span>Bicycle</span>
        </button>
        <button onClick={() => addPoints('walking')} className="bg-#49c6e5 p-4 rounded-lg flex items-center gap-2">
          <FaWalking size={24} />
          <span>Walk</span>
        </button>
        <button onClick={() => addPoints('electricCar')} className="bg-#49c6e5 p-4 rounded-lg flex items-center gap-2">
          <FaTree size={24} />
          <span>Electric Vehicle</span>
        </button>
      </div>

      {/* Reward Points and Badge System */}
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold text-#00bd9d">Your Points: {points}</h2>
        <p className="text-gray-700 mt-2">
          Earn points by choosing eco-friendly travel options! Higher points mean better rewards.
        </p>
        <div className="flex justify-center mt-4">
          {points >= 200 && <div className="badge bg-#54defd text-white p-2 rounded-full">Bronze Badge</div>}
          {points >= 400 && <div className="badge bg-#00bd9d text-white p-2 rounded-full ml-2">Silver Badge</div>}
          {points >= 600 && <div className="badge bg-#8bd7d2 text-white p-2 rounded-full ml-2">Gold Badge</div>}
        </div>
      </div>

      {/* Timeline */}
      <div className="mt-10">
        <h2 className="text-2xl text-#00bd9d font-bold">Your Eco-Friendly Journey</h2>
        <div className="timeline mt-6">
          <div className="timeline-item flex items-center mb-6">
            <div className="bg-#49c6e5 p-4 rounded-full text-white">
              <FaTrain size={24} />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold">First Train Ride</h3>
              <p className="text-gray-600">Earned 100 points for choosing the train over a car.</p>
            </div>
          </div>
          <div className="timeline-item flex items-center mb-6">
            <div className="bg-#49c6e5 p-4 rounded-full text-white">
              <FaBicycle size={24} />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold">Cycling Adventure</h3>
              <p className="text-gray-600">Earned 150 points for cycling around the city.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcoFriendlyPage;
