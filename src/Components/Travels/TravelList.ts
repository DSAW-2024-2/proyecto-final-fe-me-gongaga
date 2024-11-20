// src/components/Travels/TravelList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TravelList = () => {
  const [travels, setTravels] = useState([]);

  useEffect(() => {
    const fetchTravels = async () => {
      const response = await axios.get('/api/travel/available');
      setTravels(response.data);
    };
    fetchTravels();
  }, []);

  return (
    <div className="travel-list">
      {travels.map((travel) => (
        <div key={travel.id} className="travel-card">
          <h3>{travel.startPoint} → {travel.endPoint}</h3>
          <p>Precio: ${travel.fare}</p>
          {/* Mostrar otros detalles */}
        </div>
      ))}
    </div>
  );
};

export default TravelList;
