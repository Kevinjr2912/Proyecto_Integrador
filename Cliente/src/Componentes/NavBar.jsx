import React, { useState } from "react";
import SeccionesTienda from "./SeccionesTienda";
import FrameUser from "../Icons/FrameUser.svg";
import FrameCarrito from "../Icons/FrameCarrito.svg";
import "../Estilos/NavBar.css";
import OpcionSesion from "../Componentes/Modals/OpcionSesion";

export default function NavBar({ seccionesNav, esSeccionCliente, titulo }) {
  const [isOpcionSesionModalOpen, setIsOpcionSesionModalOpen] = useState(false);

  const openOpcionSesionModal = () => {
    setIsOpcionSesionModalOpen(true);
  };

  const closeOpcionSesionModal = () => {
    setIsOpcionSesionModalOpen(false);
  };

  return (
    <nav className="box-nav">
      <div className="box_img">
        {/* <EncabezadoPagina esSeccionCliente={esSeccionCliente} titulo={titulo} /> */}
      </div>

      <div className="actions_general">
        <SeccionesTienda seccionesNav={seccionesNav} esSeccionCliente={esSeccionCliente} />

        {esSeccionCliente && (
          <div className="nav_iconos">
            <img src={FrameUser} alt="img" onClick={openOpcionSesionModal} />
            <img src={FrameCarrito} alt="img" />
          </div>
        )}
      </div>

      {isOpcionSesionModalOpen && <OpcionSesion onClose={closeOpcionSesionModal} />}
    </nav>
  );
}
