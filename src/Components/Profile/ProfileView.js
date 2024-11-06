// src/components/Profile/ProfileView.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProfileView = ({ user }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-lg font-bold mb-4">{user.name} {user.surname}</h2>
    <p><strong>Rol:</strong> {user.role}</p>
    {/* Mostrar otros datos */}
    <Link to="/profile/edit" className="btn-primary">Editar Perfil</Link>
  </div>
);

export default ProfileView;
