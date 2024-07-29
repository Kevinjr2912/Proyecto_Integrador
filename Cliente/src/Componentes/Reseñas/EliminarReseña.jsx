import React from "react";
import styles from "../../Estilos/EliminarReseña.module.css";

export default function EliminarReseña({ resenaId, onDelete, onCancel }) {
<<<<<<< HEAD

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
=======
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
>>>>>>> 073de4a1e0b822c7eddf6e7be1e6fcb83fe69e88
    }
  };

  return (
    <div className={styles.eliminarReseña}>
<<<<<<< HEAD
      <p>¿Estás seguro de que deseas eliminar esta reseña?</p>
=======
      <p className={styles.acceptDelete}>¿Estás seguro de que deseas eliminar esta reseña?</p>
>>>>>>> 073de4a1e0b822c7eddf6e7be1e6fcb83fe69e88
      <button className={styles.deleteButton} onClick={handleDelete}>
        Eliminar
      </button>
      <button className={styles.cancelButton} onClick={onCancel}>
        Cancelar
      </button>
    </div>
  );
}
