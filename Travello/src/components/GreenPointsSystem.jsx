import React, { useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import axios from 'axios';
import { MapPin, Bike, Car, Train } from 'lucide-react';

const GOOGLE_MAPS_API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY';
const CARBON_INTERFACE_API_KEY = 'YOUR_CARBON_INTERFACE_API_KEY';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 40.7128,
  lng: -74.0060
};

const GreenPointsSystem = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [destination, setDestination] = useState(null);
  const [distance, setDistance] = useState(0);
  const [transportMode, setTransportMode] = useState('');
  const [points, setPoints] = useState(0);
  const [carbonEmissions, setCarbonEmissions] = useState(0);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_MAPS_API_KEY
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error('Error getting location:', error);
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
    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin: userLocation,
        destination: destination,
        travelMode: window.google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          const newDistance = result.routes[0].legs[0].distance.value / 1000; // Convert to km
          setDistance(newDistance);
          estimateTransportMode(newDistance);
        }
      }
    );
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
          vehicle_model_id: 'b9a6a0b8-0b4c-4f1e-9d3a-3f7b3b4b0b0b' // Example vehicle model ID
        },
        {
          headers: {
            'Authorization': `Bearer ${CARBON_INTERFACE_API_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      );
      setCarbonEmissions(response.data.data.attributes.carbon_kg);
    } catch (error) {
      console.error('Error calculating carbon emissions:', error);
    }
  };

  const handleMapClick = (event) => {
    setDestination({
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Green Points System</h1>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onClick={handleMapClick}
        >
          {userLocation && <Marker position={userLocation} />}
          {destination && <Marker position={destination} />}
        </GoogleMap>
      ) : (
        <div>Loading map...</div>
      )}
      <div className="mt-4">
        <p className="text-lg">
          <MapPin className="inline-block mr-2" />
          Distance: {distance.toFixed(2)} km
        </p>
        <p className="text-lg">
          {transportMode === 'walking' && <Bike className="inline-block mr-2" />}
          {transportMode === 'biking' && <Bike className="inline-block mr-2" />}
          {transportMode === 'public_transport' && <Train className="inline-block mr-2" />}
          {transportMode === 'car' && <Car className="inline-block mr-2" />}
          Estimated Transport Mode: {transportMode}
        </p>
        <p className="text-lg">Points Earned: {points}</p>
        <p className="text-lg">Carbon Emissions: {carbonEmissions.toFixed(2)} kg CO2</p>
      </div>
    </div>
  );
};

export default GreenPointsSystem;