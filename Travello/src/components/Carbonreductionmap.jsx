// src/components/CarbonReductionMap.jsx

import React, { useEffect, useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

const CarbonReductionMap = () => {
  const [mapData, setMapData] = useState([]);
  const [popupInfo, setPopupInfo] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: 39.833333,
    longitude: -98.583333,
    zoom: 4,
    width: '100vw',
    height: '100vh',
  });

  useEffect(() => {
    const mockData = [
      {
        name: 'Community Garden',
        description: 'A local garden promoting biodiversity and local food production.',
        longitude: -97.7431,
        latitude: 30.2672,
      },
      {
        name: 'Solar Energy Center',
        description: 'Learn about solar energy and how to implement it in your home.',
        longitude: -95.3698,
        latitude: 29.7604,
      },
      {
        name: 'Recycling Center',
        description: 'Drop off your recyclables and learn about recycling processes.',
        longitude: -122.4194,
        latitude: 37.7749,
      },
      {
        name: 'Bike Sharing Station',
        description: 'Rent bikes to reduce carbon footprint and promote healthy transport.',
        longitude: -77.0369,
        latitude: 38.9072,
      },
      {
        name: 'Environmental Workshop',
        description: 'Participate in workshops about sustainable living.',
        longitude: -118.2437,
        latitude: 34.0522,
      },
    ];

    setMapData(mockData);
  }, []);

  return (
    <div className="h-screen">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        {mapData.map((resource, index) => (
          <Marker
            key={index}
            longitude={resource.longitude}
            latitude={resource.latitude}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <div
              className="marker"
              style={{
                backgroundColor: 'green',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                cursor: 'pointer',
              }}
              onClick={() => setPopupInfo(resource)}
            ></div>
          </Marker>
        ))}

        {popupInfo && (
          <Popup
            latitude={popupInfo.latitude}
            longitude={popupInfo.longitude}
            closeButton={true}
            closeOnClick={false}
            onClose={() => setPopupInfo(null)}
          >
            <div>
              <h3 className="font-bold">{popupInfo.name}</h3>
              <p>{popupInfo.description}</p>
            </div>
          </Popup>
        )}
      </ReactMapGL>
    </div>
  );
};