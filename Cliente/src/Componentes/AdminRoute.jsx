// Componentes/AdminRoute.jsx
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';


const AdminRoute = ({ children }) => {
  const { isLoggedIn, isAdmin } = useContext(AuthContext); // Asegúrate de tener isLoggedIn y isAdmin en tu contexto

  return isLoggedIn && isAdmin ? children : <Navigate to="/loginUsuario" />;
};

export default AdminRoute;
