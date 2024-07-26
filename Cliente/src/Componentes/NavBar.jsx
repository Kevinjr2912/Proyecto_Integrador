import React, { useState } from "react";
import SeccionesTienda from "./SeccionesTienda";
import EncabezadoPagina from "./EncabezadoPagina.jsx";
import FrameUser from "../Icons/FrameUser.svg";
import FrameCarrito from "../Icons/FrameCarrito.svg";
import "../Estilos/NavBar.css";
import OpcionSesion from "../Componentes/Modals/OpcionSesion";
import { useNavigate } from "react-router-dom";

export default function NavBar({ seccionesNav, esSeccionCliente, titulo }) {
  const [isOpcionSesionModalOpen, setIsOpcionSesionModalOpen] = useState(false);
  const navigate = useNavigate();

  const openOpcionSesionModal = () => {
    setIsOpcionSesionModalOpen(true);
  };

  const closeOpcionSesionModal = () => {
    setIsOpcionSesionModalOpen(false);
  };

  const handleNavigateToCarrito = () => {
    navigate("/carritoPago");
  };

  return (
    <nav className="box-nav">
      <div className="box_img">
        { <EncabezadoPagina esSeccionCliente={esSeccionCliente} titulo={titulo} /> }
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
      </div>

      {isOpcionSesionModalOpen && (
        <OpcionSesion onClose={closeOpcionSesionModal} />
      )}
    </nav>
  );
}
