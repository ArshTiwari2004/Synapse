import React, { useState, useEffect, useRef } from 'react';
import Map, { Marker, Popup, NavigationControl, GeolocateControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useSpring, animated } from 'react-spring';
import Confetti from 'react-confetti';
import { Tooltip } from 'react-tooltip';
import { MapPin, Camera, Info, Share2 } from 'lucide-react';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

const attractionsData = {
  Maharashtra: [
    { id: 1, name: "Gateway of India", description: "A famous monument in Mumbai.", latitude: 18.9218, longitude: 72.8347, photo: "Gatewayofindia.jpg" },
    { id: 2, name: "Ajanta Caves", description: "Famous rock-cut caves.", latitude: 20.5465, longitude: 75.7006, photo: "Ajantacaves.jpg" },
    { id: 3, name: "Shirdi", description: "Famous pilgrimage site.", latitude: 19.7664, longitude: 74.3967, photo: "shirdi.jpg" },
    { id: 4, name: "Kolhapur", description: "Known for its heritage.", latitude: 16.7064, longitude: 74.2434, photo: "kohlapur.jpg" },
    { id: 5, name: "Lonavala", description: "Hill station popular for its scenery.", latitude: 18.7532, longitude: 73.4091, photo: "lonavla.jpg" },
  ],
  UttarPradesh: [
    { id: 6, name: "Taj Mahal", description: "An ivory-white marble mausoleum.", latitude: 27.1751, longitude: 78.0421, photo: "agra.jpg" },
    { id: 7, name: "Varanasi", description: "City on the banks of the Ganges.", latitude: 25.3176, longitude: 82.9739, photo: "varanasi.jpg" },
    { id: 8, name: "Lucknow", description: "Known for its rich history and architecture.", latitude: 26.8468, longitude: 80.9462, photo: "lucknow.jpg" },
    { id: 9, name: "Agra Fort", description: "A UNESCO World Heritage Site.", latitude: 27.1750, longitude: 78.0081, photo: "agrafort.jpg" },
    { id: 10, name: "Fatehpur Sikri", description: "Historical city founded by Akbar.", latitude: 27.1047, longitude: 77.6581, photo: "fatehpur.jpg" },
  ],
  Delhi: [
    { id: 11, name: "Red Fort", description: "A symbol of India's freedom.", latitude: 28.6562, longitude: 77.2410, photo: "redfort.jpg" },
    { id: 12, name: "India Gate", description: "A war memorial.", latitude: 28.6129, longitude: 77.2295, photo: "indiagate.jpg" },
    { id: 13, name: "Qutub Minar", description: "The tallest brick minaret in the world.", latitude: 28.5244, longitude: 77.1855, photo: "qutubminar.jpg" },
    { id: 14, name: "Lotus Temple", description: "A Bahá'í House of Worship.", latitude: 28.5535, longitude: 77.2588, photo: "lotus.jpg" },
    { id: 15, name: "Akshardham Temple", description: "A spiritual-cultural complex.", latitude: 28.6120, longitude: 77.2834, photo: "akshardham.jpeg" },
  ],
  TamilNadu: [
    { id: 16, name: "Meenakshi Temple", description: "An ancient temple.", latitude: 9.9250, longitude: 78.1198, photo: "meenakshi.jpg" },
    { id: 17, name: "Ooty", description: "A popular hill station.", latitude: 11.4088, longitude: 76.6950, photo: "ooty.jpg" },
    { id: 18, name: "Kanyakumari", description: "The southernmost tip of India.", latitude: 8.0884, longitude: 77.5551, photo: "kanyakumari.jpg" },
    { id: 19, name: "Mahabalipuram", description: "Famous for its rock-cut temples.", latitude: 12.6194, longitude: 80.1955, photo: "mahabali.jpg" },
    { id: 20, name: "Chennai Marina Beach", description: "One of the longest urban beaches.", latitude: 13.0487, longitude: 80.2953, photo: "cmbeach.jpg" },
  ],
};

const HiddenAttractions = () => {
  const [viewState, setViewState] = useState({
    latitude: 20.5937, //india
    longitude: 78.9629,
    zoom: 5,
  });
  const [selectedAttraction, setSelectedAttraction] = useState(null);
  const mapRef = useRef();

  const popupAnimation = useSpring({
    opacity: selectedAttraction ? 1 : 0,
    transform: selectedAttraction ? 'translateY(0)' : 'translateY(50px)',
  });

  const renderAttractionMarkers = () => {
    return Object.values(attractionsData).flat().map((attraction) => (
      <Marker
        key={attraction.id}
        longitude={attraction.longitude}
        latitude={attraction.latitude}
        anchor="bottom"
      >
        <div
          onClick={() => setSelectedAttraction(attraction)}
          className="cursor-pointer transition-all duration-300 text-blue-500 hover:text-blue-600"
        >
          <MapPin size={32} />
        </div>
      </Marker>
    ));
  };

  const renderPopup = () => {
    if (!selectedAttraction) return null;

    return (
      <Popup
        longitude={selectedAttraction.longitude}
        latitude={selectedAttraction.latitude}
        anchor="bottom"
        onClose={() => setSelectedAttraction(null)}
        closeOnClick={false}
      >
        <animated.div style={popupAnimation} className="p-4 max-w-sm">
          <h3 className="text-lg font-semibold mb-2">{selectedAttraction.name}</h3>
          <img src={selectedAttraction.photo} alt={selectedAttraction.name} className="mb-2 w-full h-32 object-cover rounded" />
          <p className="text-sm text-gray-600 mb-2">{selectedAttraction.description}</p>
          <a
            href={`/attraction/${selectedAttraction.id}`} // Adjust the route based on your routing setup
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
          >
            Explore this page
          </a>
        </animated.div>
      </Popup>
    );
  };

  return (
    <div className="relative h-screen">
      <Map
        {...viewState}
        onMove={evt => setViewState(evt.viewState)}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={MAPBOX_TOKEN}
        ref={mapRef}
      >
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
        <NavigationControl />
        {renderAttractionMarkers()}
        {renderPopup()}
      </Map>
      <div className="absolute top-4 left-4 right-4 bg-white bg-opacity-90 rounded-lg shadow-lg p-4">
        <h2 className="text-2xl font-bold text-center mb-4">Hidden Attractions</h2>
      </div>
      <Tooltip id="info-tooltip" />
      {/* {selectedAttraction && <Confetti />} */} 
    </div>
  );
};

export default HiddenAttractions;

