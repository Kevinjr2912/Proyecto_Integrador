import React, { createContext, useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom"; 
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate(); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
    const adminStatus = localStorage.getItem("isAdmin") === "true";
    setIsLoggedIn(loggedInStatus);
    setIsAdmin(adminStatus);
  }, []);

  const handleLogin = (isAdmin) => {
    setIsLoggedIn(true);
    setIsAdmin(isAdmin);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("isAdmin", isAdmin.toString());
  };

  const handleLogout = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, cerrar sesión",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        setIsLoggedIn(false);
        setIsAdmin(false);
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("isAdmin");
        localStorage.removeItem("token");
        localStorage.removeItem("idCliente"); 
        Swal.fire("¡Cerrado!", "Tu sesión ha sido cerrada.", "success");
        navigate("/")
        
      }
    });
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, isAdmin, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
