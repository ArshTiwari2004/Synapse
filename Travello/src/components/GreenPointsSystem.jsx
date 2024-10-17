import React, { useState, useEffect } from 'react';
import Map, { Marker } from 'react-map-gl';
import axios from 'axios';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin, Bike, Car, Train, Loader, Info ,Target,ArrowRightCircle } from 'lucide-react';
import { Button } from '@material-tailwind/react';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;
const API_KEY = import.meta.env.VITE_CARBON_TOKEN;

const GreenPointsSystem = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [destination, setDestination] = useState(null);
  const [distance, setDistance] = useState(0);
  const [transportMode, setTransportMode] = useState('');
  const [points, setPoints] = useState(0);
  const [carbonEmissions, setCarbonEmissions] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
          setLoading(false);
        },
        (error) => {
          console.error('Error getting location:', error);
          setError('Failed to retrieve location. Please enable location services.');
          setLoading(false);
        }
      );
    }
  }, []);

  useEffect(() => {
    if (userLocation && destination) {
      calculateDistance();
    }
  }, [userLocation, destination]);

  const calculateDistance = () => {
    if (userLocation && destination) {
      const R = 6371; // Radius of the Earth in km
      const dLat = (destination.latitude - userLocation.latitude) * (Math.PI / 180);
      const dLon = (destination.longitude - userLocation.longitude) * (Math.PI / 180);
      const a =
        0.5 - Math.cos(dLat) / 2 +
        Math.cos(userLocation.latitude * (Math.PI / 180)) *
          Math.cos(destination.latitude * (Math.PI / 180)) *
          (1 - Math.cos(dLon)) / 2;
      const newDistance = 2 * R * Math.asin(Math.sqrt(a));
      setDistance(newDistance);
      estimateTransportMode(newDistance);
    }
  };

  const estimateTransportMode = (distance) => {
    const speed = distance / 0.25; // Assume 15 minutes (0.25 hours) of travel time
    if (speed < 5) {
      setTransportMode('walking');
    } else if (speed < 20) {
      setTransportMode('biking');
    } else if (speed < 60) {
      setTransportMode('public_transport');
    } else {
      setTransportMode('car');
    }
    calculatePoints(distance);
    calculateCarbonEmissions(distance);
  };

  const calculatePoints = (distance) => {
    let newPoints = 0;
    switch (transportMode) {
      case 'walking':
        newPoints = distance * 10;
        break;
      case 'biking':
        newPoints = distance * 8;
        break;
      case 'public_transport':
        newPoints = distance * 5;
        break;
      case 'car':
        newPoints = distance * 1;
        break;
      default:
        newPoints = 0;
    }
    setPoints(Math.round(newPoints));
  };

  const calculateCarbonEmissions = async (distance) => {
    try {
      const response = await axios.post(
        'https://www.carboninterface.com/api/v1/estimates',
        {
          type: 'vehicle',
          distance_unit: 'km',
          distance_value: distance,
          vehicle_model_id: 'VALID_VEHICLE_MODEL_ID',
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );
      setCarbonEmissions(response.data.data.attributes.carbon_kg);
    } catch (error) {
      console.error('Error calculating carbon emissions:', error);
      setError('Failed to calculate carbon emissions using the API.');
      const approximateEmissions = generateRandomCarbonEmissions(distance, transportMode);
      setCarbonEmissions(approximateEmissions);
    }
  };

  const generateRandomCarbonEmissions = (distance, transportMode) => {
    let emissionsFactor;
    switch (transportMode) {
      case 'walking':
        emissionsFactor = 0.05;
        break;
      case 'biking':
        emissionsFactor = 0.1;
        break;
      case 'public_transport':
        emissionsFactor = 0.5;
        break;
      case 'car':
        emissionsFactor = 2;
        break;
      default:
        emissionsFactor = 1;
    }
    const randomFactor = Math.random() * 0.2 + 0.9;
    return (distance * emissionsFactor * randomFactor).toFixed(2);
  };

  const handleMapClick = (event) => {
    setDestination({
      latitude: event.lngLat.lat,
      longitude: event.lngLat.lng,
    });
  };

  return (
    <div className="container mx-auto p-6 bg-sky-500 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-6">Our Unique Green Points System</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">Why Green Points?</h2>
        <p className="mb-4">
          The Green Points System aims to promote sustainable travel by rewarding eco-friendly choices.
          By reducing carbon emissions through walking, biking, or using public transport, you contribute
          to a healthier planet and a greener future. Sustainable development is at the core of this initiative,
          helping us to balance our environmental impact and create a better world for generations to come.
        </p>
        <p className="text-lg mb-4 flex font-bold items-center">
          <Target className="mr-2 text-green-500" />
          How are we promoting sustainable development?
        </p>
        <p className="text-lg mb-4">
          Our approach to promoting sustainable development is centered around encouraging green travel habits. By tracking carbon emissions, we provide tangible data that users can act upon to make better travel decisions. Our points-based reward system incentivizes low-emission transport choices, driving a culture of conscious commuting. Through this initiative, we support innovation in sustainable practices and aim to foster inclusive growth that benefits the environment and society.
        </p>
        <Button
          className="mt-4 bg-green-600 text-white flex items-center justify-center hover:bg-green-700"
          onClick={() => window.open('https://sdgs.un.org/goals/goal9', '_blank')}
        >
          Learn More <ArrowRightCircle className="ml-2" />
        </Button>





       
      </div>

      {loading ? (
        <div className="flex justify-center items-center mb-6">
          <Loader className="animate-spin h-12 w-12 text-green-500" />
        </div>
      ) : (
        <Map
          initialViewState={{
            longitude: userLocation?.longitude || -74.006,
            latitude: userLocation?.latitude || 40.7128,
            zoom: 12,
          }}
          style={{ width: '100%', height: '500px', borderRadius: '8px' }}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxAccessToken={MAPBOX_TOKEN}
          onClick={handleMapClick}
        >
          {userLocation && (
            <Marker longitude={userLocation.longitude} latitude={userLocation.latitude} color="red" />
          )}
          {destination && (
            <Marker longitude={destination.longitude} latitude={destination.latitude} color="blue" />
          )}
        </Map>
      )}

      <div className="mt-8 p-6 bg-white rounded-lg shadow-md text-center">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-xl font-semibold">
              <MapPin className="inline-block mr-2" />
              Distance: {distance.toFixed(2)} km
            </p>
          </div>
          <div>
            <p className="text-xl font-semibold">
              {transportMode === 'walking' && <Bike className="inline-block mr-2" />}
              {transportMode === 'biking' && <Bike className="inline-block mr-2" />}
              {transportMode === 'public_transport' && <Train className="inline-block mr-2" />}
              {transportMode === 'car' && <Car className="inline-block mr-2" />}
              Transport Mode: {transportMode}
            </p>
          </div>
          <div>
            <p className="text-xl font-semibold">Points Earned: {points}</p>
          </div>
          <div>
            <p className="text-xl font-semibold">Carbon Emissions: {carbonEmissions} kg CO₂</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenPointsSystem;
