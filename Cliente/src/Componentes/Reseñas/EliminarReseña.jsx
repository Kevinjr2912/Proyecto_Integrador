import React from "react";
import styles from "../../Estilos/EliminarReseña.module.css";

export default function EliminarReseña({ resenaId, onDelete, onCancel }) {

  console.log("reseña id recibida de la lista " + resenaId)

  const handleDelete = async () => {
    try{
      const response = await fetch(`http://localhost:3000/resenas/deleteResena/${resenaId}`, {
        method: 'DELETE',
      });

      // Depuración de la respuesta
      console.log("Response object:", response);
      console.log("Response status:", response.status);
      console.log("Response status text:", response.statusText);

      if(response.ok){
        onDelete();
      }
    }catch(err){
      console.log(err)
    }
  };

  return (
    <div className={styles.eliminarReseña}>
      <p>¿Estás seguro de que deseas eliminar esta reseña?</p>
      <button className={styles.deleteButton} onClick={handleDelete}>
        Eliminar
      </button>
      <button className={styles.cancelButton} onClick={onCancel}>
        Cancelar
      </button>
    </div>
  );
}
