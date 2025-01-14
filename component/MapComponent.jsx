// components/MapComponent.js
import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapComponent = () => {
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    // Check if the Geolocation API is available
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error(error);
          // Optionally, set a default location if geolocation fails
          setCurrentLocation({ lat: 37.7749, lng: -122.4194 }); // Default to San Francisco
        }
      );
    } else {
      console.log('Geolocation not supported');
    }
  }, []);

  if (!currentLocation) {
    return <div>Loading...</div>;
  }

  return (
    <LoadScript googleMapsApiKey="0468-4754-8551">
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '400px' }}
        center={currentLocation}
        zoom={10}
      >
        <Marker position={currentLocation} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
