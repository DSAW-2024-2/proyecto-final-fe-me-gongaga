// src/components/Map.js
import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const Map = ({ startLocation, endLocation }) => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [startLocation.lng, startLocation.lat],
      zoom: 12
    });

    new mapboxgl.Marker().setLngLat([startLocation.lng, startLocation.lat]).addTo(map);
    new mapboxgl.Marker().setLngLat([endLocation.lng, endLocation.lat]).addTo(map);

    return () => map.remove();
  }, [startLocation, endLocation]);

  return <div ref={mapContainer} className="map-container" />;
};

export default Map;
