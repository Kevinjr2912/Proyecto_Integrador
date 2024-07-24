import React from "react";
import "../Estilos/MetodoEnvio.css";

export default function MetodoEnvio() {
  return (
    <div className="main-container">
      <div className="tituloEnvio">
      <h1>Método de envío</h1>
      </div>
      <div className="metodo-container">
        <div className="direccion-container">
          <h3>Enviar a casa</h3>
         <div className="textoDireccion">
          <p>Lorem ipsum jejjejeje  jejejeejjejejejejje jejejejejeejjejejejejjeje jejejejeejjejejejejejjejejejejej </p>
          </div> 
          <hr />
          <a href="#">Editar o agregar nueva direccion</a>
        </div>
        <button className="continuar-button">Continuar</button>
      </div>
    </div>
  );
}
