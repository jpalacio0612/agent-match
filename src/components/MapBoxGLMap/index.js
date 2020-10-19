import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const styles = {
  Width: '100%',
  height: '100vh',
};

const MapboxGLMap = () => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);
  mapboxgl.accessToken =
    'pk.eyJ1IjoianBhbGFjaW8wNjEyIiwiYSI6ImNrZ2Qzd2s4MDAzOHoycHBncGtkZGxoYnoifQ.PLm-APX_NXnz3KrYb2wJOw';

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const myLatitude = position.coords.latitude;
      const myLongitude = position.coords.longitude;
      const initializeMap = ({ setMap, mapContainer }) => {
        const map = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
          center: [myLongitude, myLatitude],
          zoom: 5,
        });

        map.on('load', () => {
          setMap(map);
          map.resize();
        });
      };

      if (!map) initializeMap({ setMap, mapContainer });
    });
  }, [map]);

  return (
    <div ref={(element) => (mapContainer.current = element)} style={styles} />
  );
};

export default MapboxGLMap;
