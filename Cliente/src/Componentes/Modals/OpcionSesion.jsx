import React from 'react';
import FrameCasco from "../../Icons/FrameCasco.svg";
import '../../Estilos/OpcionSesion.css';
import { useNavigate } from 'react-router-dom';
  
export default function OpcionSesion({ onClose }) {
  const navigate = useNavigate();

  return (
    <div className="opcion-sesion-overlay">
      <div className="opcion-sesion-box">
        <img className="img-helmet" src={FrameCasco} alt="casco" />
        <h2>Elija la opción de su inicio de sesión</h2>
        <button className="login-button" onClick={() => { navigate('/loginAdmin'); onClose(); }}>Administrador</button>
        <button className="login-button" onClick={() => { navigate('/loginUsuario'); onClose(); }}>Cliente</button>
        <button className="login-button close-button" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}
