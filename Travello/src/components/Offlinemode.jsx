import React, { useState, useEffect } from 'react';
import Map, { NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Download, Wifi, WifiOff } from 'lucide-react';
import { saveAs } from 'file-saver'; // Import FileSaver.js

const MAPBOX_TOKEN = 'pk.eyJ1IjoiYXJzaHRpd2FyaSIsImEiOiJjbTJhODE2dm8wZ2MxMmlxdTJkbnJ1aTZnIn0.m9ky2-2MfcdA37RIVoxC_w';

const OfflineMode = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [viewState, setViewState] = useState({
    longitude: 78.9629,
    latitude: 20.5937,
    zoom: 4,
  });

  useEffect(() => {
    const handleOfflineStatus = () => setIsOffline(!navigator.onLine);

    window.addEventListener('offline', handleOfflineStatus);
    window.addEventListener('online', handleOfflineStatus);

    return () => {
      window.removeEventListener('offline', handleOfflineStatus);
      window.removeEventListener('online', handleOfflineStatus);
    };
  }, []);

  const downloadMapTiles = async () => {
    const confirmDownload = window.confirm('Do you want to download the current map view for offline use?');
    if (!confirmDownload) return;

    setIsDownloading(true);
    setDownloadProgress(0);

    try {
      const { longitude, latitude, zoom } = viewState;
      const tileUrls = generateTileUrls(zoom, longitude, latitude);
      const totalTiles = tileUrls.length;

      for (let i = 0; i < totalTiles; i++) {
        const url = tileUrls[i];
        const response = await fetch(url);
        
        if (response.ok) {
          const blob = await response.blob();

          // Use FileSaver.js to save the blob
          const tileX = Math.floor((longitude + 180) / 360 * Math.pow(2, zoom)) + Math.floor(i % 3) - 1;
          const tileY = Math.floor((1 - Math.log(Math.tan(latitude * Math.PI / 180) + 1 / Math.cos(latitude * Math.PI / 180)) / Math.PI) / 2 * Math.pow(2, zoom)) + Math.floor(i / 3) - 1;
          const fileName = `tile_${zoom}_${tileX}_${tileY}.png`;
          
          saveAs(blob, fileName); // Trigger download with FileSaver.js

          setDownloadProgress(Math.round(((i + 1) / totalTiles) * 100));
        } else {
          console.error('Failed to fetch tile:', url);
        }
      }

      alert('Map tiles for the current view have been downloaded successfully! The map is now available offline in your Downloads folder.');
    } catch (error) {
      console.error('Error downloading map tiles:', error);
      alert('Failed to download map tiles. Please try again.');
    } finally {
      setIsDownloading(false);
      setDownloadProgress(0);
    }
  };

  const generateTileUrls = (zoom, lon, lat) => {
    const tileUrls = [];
    const tilesPerSide = 5; // Adjust this number to download more or fewer tiles
    const scale = Math.pow(2, zoom);

    const centerTileX = Math.floor((lon + 180) / 360 * scale);
    const centerTileY = Math.floor((1 - Math.log(Math.tan(lat * Math.PI / 180) + 1 / Math.cos(lat * Math.PI / 180)) / Math.PI) / 2 * scale);

    for (let x = -Math.floor(tilesPerSide / 2); x <= Math.floor(tilesPerSide / 2); x++) {
      for (let y = -Math.floor(tilesPerSide / 2); y <= Math.floor(tilesPerSide / 2); y++) {
        const tileX = centerTileX + x;
        const tileY = centerTileY + y;
        tileUrls.push(
          `https://api.mapbox.com/v4/mapbox.mapbox-streets-v8/${zoom}/${tileX}/${tileY}@2x.png?access_token=${MAPBOX_TOKEN}`
        );
      }
    }
    return tileUrls;
  };

  return (
    <div className="p-6 bg-gradient-to-b from-blue-100 to-blue-200 min-h-screen flex flex-col items-center">
      <h2 className="text-4xl text-blue-800 font-bold mb-4">Offline Mode Map</h2>
      <div className="w-full max-w-3xl mb-4 flex justify-between items-center">
        <button
          onClick={downloadMapTiles}
          disabled={isDownloading || isOffline}
          className={`flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isDownloading || isOffline ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <Download size={20} />
          <span>{isDownloading ? `Downloading... ${downloadProgress}%` : 'Download Current View'}</span>
        </button>
        <div className="flex items-center space-x-2">
          {isOffline ? <WifiOff size={20} className="text-red-500" /> : <Wifi size={20} className="text-green-500" />}
          <span className={isOffline ? 'text-red-500' : 'text-green-500'}>
            {isOffline ? 'Offline' : 'Online'}
          </span>
        </div>
      </div>
      {isDownloading && (
        <div className="w-full max-w-3xl mb-4 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${downloadProgress}%` }}></div>
        </div>
      )}
      <div className="w-full max-w-4xl h-96 rounded-lg overflow-hidden shadow-lg">
        <Map
          {...viewState}
          onMove={(evt) => setViewState(evt.viewState)}
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
