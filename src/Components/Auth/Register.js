// src/components/Auth/Register.js
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    universityId: '',
    email: '',
    contactNumber: '',
    password: '',
    role: 'passenger',
    vehicle: {
      plate: '',
      photo: '',
      capacity: 0,
      soatPhoto: '',
      brand: '',
      model: ''
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/register', formData);
      alert("Registro exitoso");
    } catch (error) {
      alert("Error en el registro");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Registro</h2>
      <input
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Nombre"
        required
        className="input"
      />
      {/* Resto de campos, incluyendo condicionales para mostrar campos del vehículo */}
      <button type="submit" className="btn-primary">Registrar</button>
    </form>
  );
};

export default Register;
