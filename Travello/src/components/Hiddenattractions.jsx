import React, { useState, useEffect, useRef } from 'react';
import Map, { Marker, Popup, NavigationControl, GeolocateControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useSpring, animated } from 'react-spring';
import Confetti from 'react-confetti';
import { Tooltip } from 'react-tooltip';
import { MapPin, Camera, Info, Share2 } from 'lucide-react';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

const attractionsData = {
  Udupi: [
    {
      id: 1,
      name: "Kudlu Teertha Falls",
      description: "Located about 42 km from Udupi, this hidden gem is a stunning waterfall surrounded by lush greenery. It requires a short trek through the forest to reach the falls.",
      latitude: 13.5015, 
      longitude: 74.8544,
      photo: "kudlu_teertha_falls.jpg"
    },
    {
      id: 2,
      name: "Arbi Falls",
      description: "A small yet scenic waterfall located near Manipal, perfect for a peaceful retreat in nature, especially during the monsoon season.",
      latitude: 13.3551, 
      longitude: 74.7931,
      photo: "arbifalls.jpg"
    },
    {
      id: 3,
      name: "Kemmannu Hanging Bridge",
      description: "A quaint, scenic suspension bridge near Udupi that offers a beautiful view of the river and surrounding greenery.",
      latitude: 13.3789, 
      longitude: 74.7205,
      photo: "kemmannu_hanging_bridge.jpg"
    },
    {
      id: 4,
      name: "Anejhari Butterfly Camp",
      description: "Situated in the Mookambika Wildlife Sanctuary, this is a tranquil spot for nature lovers and a great place to see a variety of butterflies.",
      latitude: 13.6444, 
      longitude: 74.7380,
      photo: "anejhari.jpg"
    },
    {
      id: 5,
      name: "Karkala Gomateshwara Statue",
      description: "Though not widely known, this 42-foot tall statue in Karkala (about 37 km from Manipal) is a peaceful, serene spot with panoramic views from the hilltop.",
      latitude: 13.2104, 
      longitude: 74.9884,
      photo: "gomateshwara.jpeg"
    }
  ],
  
  Maharashtra: [
    { id: 6, name: "Gateway of India", description: "A famous monument in Mumbai.", latitude: 18.9218, longitude: 72.8347, photo: "Gatewayofindia.jpg" },
    { id: 7, name: "Ajanta Caves", description: "Famous rock-cut caves.", latitude: 20.5465, longitude: 75.7006, photo: "Ajantacaves.jpg" },
    { id: 8, name: "Shirdi", description: "Famous pilgrimage site.", latitude: 19.7664, longitude: 74.3967, photo: "shirdi.jpg" },
    { id: 9, name: "Kolhapur", description: "Known for its heritage.", latitude: 16.7064, longitude: 74.2434, photo: "kohlapur.jpg" },
    { id: 10, name: "Lonavala", description: "Hill station popular for its scenery.", latitude: 18.7532, longitude: 73.4091, photo: "lonavla.jpg" },
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
            className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
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
        <h2 className="text-2xl font-bold text-teal-800 text-center mb-4">Hidden Attractions</h2>
      </div>
      <Tooltip id="info-tooltip" />
      {/* {selectedAttraction && <Confetti />} */} 
    </div>
  );
};

export default HiddenAttractions;

