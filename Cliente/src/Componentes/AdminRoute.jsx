// AdminRoute.jsx
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from './Contexto/AuthContext';

const AdminRoute = ({ children }) => {
  const { isLoggedIn, isAdmin } = useContext(AuthContext);

  return isLoggedIn && isAdmin ? children : <Navigate to="/loginAdmin" />;
};

export default AdminRoute;
