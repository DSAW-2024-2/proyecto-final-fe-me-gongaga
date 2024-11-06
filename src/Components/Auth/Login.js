// src/components/Auth/Login.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      alert("Inicio de sesión exitoso");
    } catch (error) {
      alert("Error de inicio de sesión");
    }
  };

  return (
    <form onSubmit={handleLogin} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Iniciar sesión</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Correo"
        required
        className="input"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Contraseña"
        required
        className="input"
      />
      <button type="submit" className="btn-primary">Iniciar sesión</button>
    </form>
  );
};

export default Login;
