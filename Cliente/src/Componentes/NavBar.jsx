import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Contexto/AuthContext"; 
import SeccionesTienda from "./SeccionesTienda";
import EncabezadoPagina from "./EncabezadoPagina.jsx";
import FrameUser from "../Icons/FrameUser.svg";
import FrameCarrito from "../Icons/FrameCarrito.svg";
import "../Estilos/NavBar.css";
import Buscador from "./Buscador";
import OpcionSesion from "../Componentes/Modals/OpcionSesion";

export default function NavBar({ seccionesNav, esSeccionCliente, titulo }) {
  const [isOpcionSesionModalOpen, setIsOpcionSesionModalOpen] = useState(false);
  const navigate = useNavigate();
  const { authState, logout } = useAuth(); // uso contexto

  const openOpcionSesionModal = () => {
    setIsOpcionSesionModalOpen(true);
  };

  const closeOpcionSesionModal = () => {
    setIsOpcionSesionModalOpen(false);
  };

  const handleNavigateToCarrito = () => {
    navigate("/carritoPago");
  };

  const handleLogout = () => {
    logout(); // funcion cerrar sesion
    console.log("Cerrando sesión...");
    navigate("/"); // Redirige a la página de inicio
  };

  return (
    <nav className="box-nav">
      <div className="box_img">
        {<EncabezadoPagina esSeccionCliente={esSeccionCliente} titulo={titulo} />}
      </div>

      <div className="actions_general">
        <SeccionesTienda
          seccionesNav={seccionesNav}
          esSeccionCliente={esSeccionCliente}
        />

        {esSeccionCliente && (
          <div className="nav_iconos">
            <img src={FrameUser} alt="img" onClick={openOpcionSesionModal} />
            <img src={FrameCarrito} alt="img" onClick={handleNavigateToCarrito} />
          </div>
        )}
        
        {authState.isLoggedIn && (
          <button className="logout-button" onClick={handleLogout}>
            Cerrar Sesión
          </button>
        )}
      </div>

      {isOpcionSesionModalOpen && (
        <OpcionSesion onClose={closeOpcionSesionModal} />
      )}
    </nav>
  );
}
