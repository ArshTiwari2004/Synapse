import React, { useState, useEffect } from 'react';
import Map, { NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { openDB } from 'idb';
import ClipLoader from 'react-spinners/ClipLoader'; // Import the ClipLoader from react-spinners

const MAPBOX_TOKEN = 'pk.eyJ1IjoiYXJzaHRpd2FyaSIsImEiOiJjbTJhODE2dm8wZ2MxMmlxdTJkbnJ1aTZnIn0.m9ky2-2MfcdA37RIVoxC_w';

const OfflineMode = () => {
  const [isOffline, setIsOffline] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    // Check if we're offline
    setIsOffline(!navigator.onLine);
    window.addEventListener('offline', () => setIsOffline(true));
    window.addEventListener('online', () => setIsOffline(false));
  }, []);

  const downloadMapTiles = async () => {
    setIsDownloading(true);

    try {
      const db = await openDB('MapTilesDB', 1, {
        upgrade(db) {
          db.createObjectStore('tiles', { keyPath: 'url' });
        },
      });

      // Define the tile coordinates for a specific zoom level
      const tileUrls = generateTileUrls(4, 78, 20);

      // Fetch and store each tile in IndexedDB
      for (const url of tileUrls) {
        const response = await fetch(url);
        const blob = await response.blob();
        await db.put('tiles', { url, blob });
      }

      alert('Map tiles downloaded successfully! The map is now available offline.');
    } catch (error) {
      console.error('Error downloading map tiles:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const generateTileUrls = (zoom, lon, lat) => {
    // This function generates URLs for the tile coordinates needed to cover a map area
    const tiles = [];
    for (let x = 0; x <= 10; x++) {
      for (let y = 0; y <= 10; y++) {
        tiles.push(
          `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/${zoom}/${x}/${y}?access_token=${MAPBOX_TOKEN}`
        );
      }
    }
    return tiles;
  };

  const loadOfflineMap = async () => {
    const db = await openDB('MapTilesDB', 1);
    const tiles = await db.getAll('tiles');

    if (tiles.length > 0) {
      console.log('Offline map loaded with cached tiles:', tiles);
    } else {
      console.warn('No offline map tiles found. Please download tiles when online.');
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Offline Mode Map</h2>
      <div className="w-full max-w-3xl mb-4 flex flex-col items-center">
        {isDownloading ? (
          <div className="flex flex-col items-center">
            <ClipLoader color="#4A90E2" loading={isDownloading} size={50} /> {/* Spinner with custom color and size */}
            <p className="mt-2 text-lg text-gray-600">Please wait, we're downloading the map for you. Happy Travelling!</p>
          </div>
        ) : (
          <button
            onClick={downloadMapTiles}
            disabled={isOffline}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {isOffline ? 'Map Available Offline' : 'Download Map for Offline Use'}
          </button>
        )}
      </div>
      <div className="w-full max-w-4xl h-96">
        <Map
          initialViewState={{
            longitude: 78.9629,
            latitude: 20.5937,
            zoom: 4,
          }}
          style={{ width: '100%', height: '100%' }}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxAccessToken={MAPBOX_TOKEN}
        >
          <NavigationControl />
        </Map>
      </div>
    </div>
  );
};

export default OfflineMode;
