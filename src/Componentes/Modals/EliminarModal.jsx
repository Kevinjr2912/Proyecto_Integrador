import React from "react";
import "../../Estilos/EliminarModal.css";

export default function EliminarModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="eliminar-modal-overlay">
      <div className="eliminar-modal-content">
        <h2>¿Estás seguro de que deseas eliminarlo?</h2>
        <div className="eliminar-actionsProduct">
          <button className="eliminar-btn_yes" onClick={onConfirm}>
            Sí
          </button>
          <button className="eliminar-btn_no" onClick={onClose}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}
