import React from "react";
import "../Estilos/DetalleStatus.css";

export default function DetalleStatus() {
  return (
    <div className="main-container">
      <div className="form-container">
        <label htmlFor="link">Camión de envío (link):</label>
        <input type="text" id="link" placeholder="Link" />
        <button type="submit">Enviar</button>
      </div>
    </div>
  );
}
