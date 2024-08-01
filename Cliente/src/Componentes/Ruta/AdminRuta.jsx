import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../Contexto/AuthContext";

function AdminRuta({ children }) {
  const { isLoggedIn, isAdmin } = useContext(AuthContext);

  if (!isLoggedIn || !isAdmin) {
    return <Navigate to="/loginAdmin" />;
  }

  return children;
}

export default AdminRuta;
