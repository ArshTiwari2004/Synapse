import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaUtensils, FaTheaterMasks, FaPaintBrush, FaHiking, FaHome, FaGuitar } from 'react-icons/fa';

const GOOGLE_MAPS_API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY';

const Udupi = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [locationData, setLocationData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (userLocation) {
      fetchLocationData();
    }
  }, [userLocation]);

  const fetchLocationData = async () => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${userLocation.lat},${userLocation.lng}&key=${GOOGLE_MAPS_API_KEY}`
      );
      const address = response.data.results[0];
      const city = address.address_components.find(
        (component) => component.types.includes('locality')
      ).long_name;
      const state = address.address_components.find(
        (component) => component.types.includes('administrative_area_level_1')
      ).long_name;
      setLocationData({ city, state });
    } catch (error) {
      console.error('Error fetching location data:', error);
    }
  };

  const handleStartJourney = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  const categories = [
    {
      title: 'Local Cuisines',
      description: 'Taste the authentic flavors through cooking classes and food tours.',
      image: 'https://img.onmanorama.com/content/dam/mm/en/food/features/images/2022/1/11/north-indian-cuisine.jpg',
      backgroundColor: 'bg-orange-500',
      icon: <FaUtensils />,
      link: '/local-cuisines',
    },
    {
      title: 'Cultural Activities',
      description: 'Join traditional festivals, local ceremonies, and artistic performances.',
      image: 'https://images.jdmagicbox.com/quickquotes/listicle/listicle_1686140315148_74ycs_1040x500.jpg',
      backgroundColor: 'bg-yellow-400',
      icon: <FaTheaterMasks />,
      link: '/cultural-activities',
    },
    {
      title: 'Handicrafts & Workshops',
      description: 'Create your own souvenirs by participating in workshops.',
      image: 'https://t3.ftcdn.net/jpg/05/66/34/10/360_F_566341036_f2mCzWyHi9I4aMOSSiy1XUUhvEqdUKJ1.jpg',
      backgroundColor: 'bg-blue-400',
      icon: <FaPaintBrush />,
      link: '/handicrafts-workshops',
    },
    {
      title: 'Nature & Adventure',
      description: 'Explore eco-tours and hikes with local guides.',
      image: 'https://etimg.etb2bimg.com/thumb/msid-113129852,imgsize-266464,width-1200,height=765,overlay-ettravel/destination/states/need-to-create-new-travel-destinations-in-india-with-focus-on-nature-and-adventure-bajaj.jpg',
      backgroundColor: 'bg-green-500',
      icon: <FaHiking />,
      link: '/nature-adventure',
    },
    {
      title: 'Community Living',
      description: 'Stay with local families to experience daily life.',
      image: 'https://t3.ftcdn.net/jpg/03/95/31/38/360_F_395313832_J5yId6zZgFo8F9xLgEX7alsITys2xhV7.jpg',
      backgroundColor: 'bg-indigo-600',
      icon: <FaHome />,
      link: '/community-living',
    },
    {
      title: 'Traditional Music & Dance',
      description: 'Experience local music and dance performances, or learn the art yourself!',
      image: 'https://img.freepik.com/premium-photo/cultural-performance-showcasing-traditional-indian-music-dance-forms-representing-rich-cu_890802-1462.jpg',
      backgroundColor: 'bg-yellow-600',
      icon: <FaGuitar />,
      link: '/traditional-music-dance',
    },
  ];

  const experiences = [
    {
      title: 'Mysore Palace Tour',
      description: 'Explore the magnificent Mysore Palace and learn about its rich history.',
      image: 'https://www.karnatakatourism.org/wp-content/uploads/2020/06/Mysore-Palace-1.jpg',
      backgroundColor: 'bg-yellow-400',
    },
    {
      title: 'Coorg Coffee Plantation Stay',
      description: 'Experience life on a coffee plantation in the beautiful hills of Coorg.',
      image: 'https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1078046949_20190822173441.jpg',
      backgroundColor: 'bg-green-500',
    },
    {
      title: 'Hampi Heritage Walk',
      description: 'Discover the ancient ruins of Hampi, a UNESCO World Heritage site.',
      image: 'https://www.karnatakatourism.org/wp-content/uploads/2020/06/Hampi-1.jpg',
      backgroundColor: 'bg-orange-500',
    },
    {
      title: 'Gokarna Beach Retreat',
      description: 'Relax on the pristine beaches of Gokarna and practice yoga by the sea.',
      image: 'https://www.karnatakatourism.org/wp-content/uploads/2020/06/Gokarna-1.jpg',
      backgroundColor: 'bg-blue-400',
    },
    {
      title: 'Bandipur Wildlife Safari',
      description: 'Embark on a thrilling safari in Bandipur National Park to spot tigers and elephants.',
      image: 'https://www.karnatakatourism.org/wp-content/uploads/2020/06/Bandipur-National-Park-1.jpg',
      backgroundColor: 'bg-green-600',
    },
    {
      title: 'Udupi Temple and Cuisine Tour',
      description: 'Visit the famous Krishna Temple and savor authentic Udupi cuisine.',
      image: 'https://www.karnatakatourism.org/wp-content/uploads/2020/06/Udupi-Krishna-Temple-1.jpg',
      backgroundColor: 'bg-yellow-500',
    },
  ];

  const faqs = [
    {
      question: 'What is local immersion?',
      answer: 'Local immersion is about engaging with the local community, culture, and traditions to get an authentic travel experience.',
    },
    {
      question: 'How do I choose the right experience?',
      answer: 'Consider your interests and what you want to explore, whether its nature, culture, food, or adventure. We offer a range of experiences for every preference.',
    },
    {
      question: 'Are these experiences sustainable?',
      answer: 'Yes! All our experiences focus on sustainability and support the local economy, promoting responsible tourism.',
    },
    {
      question: 'Is it safe to stay with local families?',
      answer: 'Absolutely. We ensure all hosts are vetted, and youll have a safe and enriching experience while staying with local families.',
    },
    {
      question: 'How can I book an experience?',
      answer: 'You can easily book through our platform by selecting an experience, choosing a date, and confirming your booking online.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gradient-to-b from-mint to-light-green text-gray-800">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-16 bg-teal-green text-white rounded-lg shadow-lg"
      >
        <h1 className="text-4xl font-bold mb-6">Explore Local Immersions</h1>
        <p className="text-xl mb-8">
          Dive deep into the heart of cultures with our local immersion programs. Discover authentic experiences, local flavors, and meaningful connections.
        </p>
        {/* <button
          className="px-6 py-3 bg-teal-50 text-green-800 font-bold rounded hover:bg-teal-100 flex items-center mx-auto"
          onClick={handleStartJourney}
        >
          <FaMapMarkerAlt className="mr-2" />
          Start Your Journey
        </button> */}
        {locationData && (
          <p className="mt-4 text-lg">
            Exploring experiences in {locationData.city}, {locationData.state}
          </p>
        )}
      </motion.div>

      {/* Immersion Categories Section */}
      <div className="mt-12">
        <h2 className="text-center text-4xl text-teal-800 mb-8">Why Local Immersion?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${category.backgroundColor} p-8 rounded-lg text-center shadow-lg cursor-pointer`}
              onClick={() => navigate(category.link)}
            >
              <img src={category.image} alt={category.title} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="text-5xl mt-6 text-white">{category.icon}</div>
              <h3 className="text-3xl font-bold mt-4 text-white">{category.title}</h3>
              <p className="text-lg mt-4 text-white">{category.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="mt-12">
        <h2 className="text-center text-4xl text-teal-800 mb-8">Immersive Experiences in Karnataka</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${experience.backgroundColor} p-8 rounded-lg text-center shadow-lg cursor-pointer`}
            >
              <img src={experience.image} alt={experience.title} className="w-full h-48 object-cover rounded-t-lg" />
              <h3 className="text-2xl font-bold mt-6 text-white">{experience.title}</h3>
              <p className="text-lg mt-4 text-white">{experience.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-12 bg-teal-50 p-8 rounded-lg shadow-lg">
        <h2 className="text-center text-3xl text-green-800 mb-8">Frequently Asked Questions (FAQs)</h2>
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="mb-6 p-4 rounded-lg cursor-pointer hover:bg-teal-100 transition-colors"
            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-xl font-bold text-green-800">{faq.question}</h3>
            {activeIndex === index && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 text-gray-700"
              >
                {faq.answer}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Udupi;