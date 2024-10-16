import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ChooseUs = () => {
  const features = [
    {
      title: 'Taj Mahal, Agra',
      description:
        'The Taj Mahal changes color throughout the day, appearing pinkish in the morning, bluish in the evening, and golden under the moonlight',
      image: 'tajmahal.jpeg',
    },
    {
      title: 'Red Fort, New Delhi',
      description:
        'The Red Fort in Delhi was originally white and made of limestone, but when the stone started chipping off, it was painted red by the British',
      image: 'redfort.jpg',
    },
    {
      title: 'Sun Temple, Konark',
      description:
        'The Sun Temple in Konark is designed as a giant chariot with 12 pairs of intricately carved stone wheels, each representing a month of the year and capable of telling time!',
      image: 'suntemple.jpg',
    },
    {
      title: 'Mysore Palace, Karnataka',
      description:
        'Mysore Palace is illuminated by nearly 100,000 lights during special occasions, creating a breathtaking spectacle!',
      image: 'mysorepalace.jpg',
    },
    {
      title: 'Hawa Mahal, Jaipur',
      description:
        'Hawa Mahal has 953 small windows, or "jharokhas," designed to allow royal ladies to observe street festivities without being seen',
      image: 'hawamahal.jpg',
    },
    {
      title: 'Shaniwar wada,Pune',
      description:
        'Shaniwar Wada is famous for its majestic architecture and eerie legends of being haunted by the ghost of a young prince',
      image: 'shaniwarwada.jpg',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full relative">
      <div className="relative bg-teal-500 py-20 px-4" id="featuresSection"> 
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl flex justify-center items-center font-bold mb-6 text-white"> 
          Must-See Monuments
          </h2>
          <Slider {...settings}>
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white bg-opacity-90 rounded-lg shadow-md text-center"> 
                <img src={feature.image} alt={feature.title} className="h-60 mx-auto mb-4 object-cover rounded" /> 
                <h3 className="text-2xl font-bold mb-2 text-teal-500">{feature.title}</h3> 
                <p className="text-gray-800">{feature.description}</p> 
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
