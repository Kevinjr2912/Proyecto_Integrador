import React from "react";
import styles from "../../Estilos/EliminarReseña.module.css";

export default function EliminarReseña({ resenaId, onDelete, onCancel }) {
  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/resenas/deleteResena/${resenaId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        alert("Reseña eliminada exitosamente");
        onDelete();
      } else {
        alert("Error al eliminar reseña");
      }
    } catch (err) {
      alert("Error de red");
    }
  };

  return (
    <div className={styles.eliminarReseña}>
      <p className={styles.acceptDelete}>¿Estás seguro de que deseas eliminar esta reseña?</p>
      <button className={styles.deleteButton} onClick={handleDelete}>
        Eliminar
      </button>
      <button className={styles.cancelButton} onClick={onCancel}>
        Cancelar
      </button>
    </div>
  );
}
