import React, { useState, useEffect, useRef } from 'react';
import Map, { Marker, Popup, NavigationControl, GeolocateControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import * as turf from '@turf/turf';
import { useSpring, animated } from 'react-spring';
import Confetti from 'react-confetti';
import { Tooltip } from 'react-tooltip';
import { MapPin, Compass, Star, Camera, Info, X, ChevronDown, ChevronUp, Share2 } from 'lucide-react';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

console.log(import.meta.env);


//console.log(MAPBOX_TOKEN)

const HiddenAttractions = () => {
  const [viewState, setViewState] = useState({
    latitude: 40.7128,
    longitude: -74.0060,
    zoom: 12
  });
  const [attractions, setAttractions] = useState([]);
  const [selectedAttraction, setSelectedAttraction] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [discoveredAttractions, setDiscoveredAttractions] = useState([]);
  const [showTips, setShowTips] = useState(false);
  const mapRef = useRef();

  useEffect(() => {
    fetchAttractions();
  }, []);

  const fetchAttractions = async () => {
    try {
      const response = await fetch('/api/hidden-attractions');
      const data = await response.json();
      setAttractions(data);
    } catch (error) {
      console.error('Error fetching attractions:', error);
    }
  };

  const handleMarkerClick = (attraction) => {
    setSelectedAttraction(attraction);
    if (!discoveredAttractions.includes(attraction.id)) {
      discoverAttraction(attraction);
    }
  };

  const discoverAttraction = async (attraction) => {
    try {
      const response = await fetch(`/api/discover-attraction/${attraction.id}`, { method: 'POST' });
      if (response.ok) {
        setDiscoveredAttractions([...discoveredAttractions, attraction.id]);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
      }
    } catch (error) {
      console.error('Error discovering attraction:', error);
    }
  };

  const calculateDistance = (attraction) => {
    if (!userLocation) return null;
    const from = turf.point([userLocation.longitude, userLocation.latitude]);
    const to = turf.point([attraction.longitude, attraction.latitude]);
    const distance = turf.distance(from, to, { units: 'kilometers' });
    return distance.toFixed(2);
  };

  const popupAnimation = useSpring({
    opacity: selectedAttraction ? 1 : 0,
    transform: selectedAttraction ? 'translateY(0)' : 'translateY(50px)',
  });

  const renderAttractionMarkers = () => {
    return attractions.map((attraction) => (
      <Marker
        key={attraction.id}
        longitude={attraction.longitude}
        latitude={attraction.latitude}
        anchor="bottom"
      >
        <div
          onClick={() => handleMarkerClick(attraction)}
          className={`cursor-pointer transition-all duration-300 ${
            discoveredAttractions.includes(attraction.id)
              ? 'text-green-500 hover:text-green-600'
              : 'text-red-500 hover:text-red-600'
          }`}
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
          <p className="text-sm text-gray-600 mb-2">{selectedAttraction.description}</p>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-indigo-600">
              {calculateDistance(selectedAttraction)} km away
            </span>
            <span className="flex items-center text-yellow-500">
              <Star size={16} className="mr-1" />
              {selectedAttraction.rating.toFixed(1)}
            </span>
          </div>
          <button
            onClick={() => {/* Implement photo challenge */}}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center"
          >
            <Camera size={18} className="mr-2" />
            Take Photo Challenge
          </button>
        </animated.div>
      </Popup>
    );
  };

  const renderLocationTips = () => {
    if (!selectedAttraction) return null;

    return (
      <div className="absolute bottom-4 left-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-md mx-auto">
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-lg font-semibold">Location Tips</h4>
          <button onClick={() => setShowTips(!showTips)} className="text-gray-500 hover:text-gray-700">
            {showTips ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
          </button>
        </div>
        {showTips && (
          <ul className="list-disc list-inside text-sm text-gray-600">
            {selectedAttraction.tips.map((tip, index) => (
              <li key={index} className="mb-1">{tip}</li>
            ))}
          </ul>
        )}
      </div>
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
          onGeolocate={(e) => {
            setUserLocation({
              latitude: e.coords.latitude,
              longitude: e.coords.longitude
            });
          }}
        />
        <NavigationControl />
        {renderAttractionMarkers()}
        {renderPopup()}
      </Map>

      {renderLocationTips()}

      <div className="absolute top-4 left-4 right-4 bg-white bg-opacity-90 rounded-lg shadow-lg p-4">
        <h2 className="text-2xl font-bold text-center mb-4">Hidden Attractions</h2>
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-medium">
            Discovered: {discoveredAttractions.length} / {attractions.length}
          </span>
          <button
            onClick={() => {/* Implement share functionality */}}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300 flex items-center"
          >
            <Share2 size={18} className="mr-2" />
            Share Progress
          </button>
        </div>
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200">
                Explorer Progress
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-indigo-600">
                {((discoveredAttractions.length / attractions.length) * 100).toFixed(0)}%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
            <div
              style={{ width: `${(discoveredAttractions.length / attractions.length) * 100}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"
            ></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 right-4">
        <button
          onClick={() => {/* Implement info modal */}}
          className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300"
          data-tooltip-id="info-tooltip"
          data-tooltip-content="How to play"
        >
          <Info size={24} className="text-indigo-600" />
        </button>
      </div>

      <Tooltip id="info-tooltip" />

      {showConfetti && <Confetti />}
    </div>
  );
};

export default HiddenAttractions;