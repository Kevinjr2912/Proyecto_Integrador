import React from "react";
import styles from "../../Estilos/EliminarReseña.module.css";

export default function EliminarReseña({ onDelete, onCancel }) {
  return (
    <div className={styles.eliminarReseña}>
      <p>¿Estás seguro de que deseas eliminar esta reseña?</p>
      <button className={styles.deleteButton} onClick={onDelete}>
        Eliminar
      </button>
      <button className={styles.cancelButton} onClick={onCancel}>
        Cancelar
      </button>
    </div>
  );
}
