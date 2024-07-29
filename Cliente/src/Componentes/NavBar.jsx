// import React, { useState } from "react";
// import SeccionesTienda from "./SeccionesTienda";
// import EncabezadoPagina from "./EncabezadoPagina.jsx";
// import FrameUser from "../Icons/FrameUser.svg";
// import FrameCarrito from "../Icons/FrameCarrito.svg";
// import "../Estilos/NavBar.css";
// import Buscador from "./Buscador";
// import OpcionSesion from "../Componentes/Modals/OpcionSesion";
// import { useNavigate } from "react-router-dom";

// export default function NavBar({ seccionesNav, esSeccionCliente, titulo, isLoggedIn, handleLogout }) {
//   const [isOpcionSesionModalOpen, setIsOpcionSesionModalOpen] = useState(false);
//   const navigate = useNavigate();

//   const openOpcionSesionModal = () => {
//     setIsOpcionSesionModalOpen(true);
//   };

//   const closeOpcionSesionModal = () => {
//     setIsOpcionSesionModalOpen(false);
//   };

//   const handleNavigateToCarrito = () => {
//     navigate("/carritoPago");
//   };

//   return (
//     <nav className="box-nav">
//       <div className="box_img">
//         <EncabezadoPagina esSeccionCliente={esSeccionCliente} titulo={titulo} />
//       </div>

//       <div className="actions_general">
//         <SeccionesTienda
//           seccionesNav={seccionesNav}
//           esSeccionCliente={esSeccionCliente}
//         />

//         {esSeccionCliente && (
//           <div className="nav_iconos">
//             <img src={FrameUser} alt="img" onClick={openOpcionSesionModal} />
//             <img src={FrameCarrito} alt="img" onClick={handleNavigateToCarrito} />
//           </div>
//         )}

//         {isLoggedIn && (
//           <button className="logout-button" onClick={handleLogout}>
//             Cerrar Sesión
//           </button>
//         )}
//       </div>

//       {isOpcionSesionModalOpen && (
//         <OpcionSesion onClose={closeOpcionSesionModal} />
//       )}
//     </nav>
//   );
// }

// NavBar.js
import React, { useState, useContext } from "react";
import AuthContext from "./Contexto/AuthContext";
import SeccionesTienda from "./SeccionesTienda";
import EncabezadoPagina from "./EncabezadoPagina.jsx";
import FrameUser from "../Icons/FrameUser.svg";
import FrameCarrito from "../Icons/FrameCarrito.svg";
import "../Estilos/NavBar.css";
import Buscador from "./Buscador";
import OpcionSesion from "../Componentes/Modals/OpcionSesion";
import { useNavigate } from "react-router-dom";

export default function NavBar({ seccionesNav, esSeccionCliente, titulo }) {
  const { isLoggedIn, handleLogout } = useContext(AuthContext);
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
        
        {isLoggedIn && (
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
