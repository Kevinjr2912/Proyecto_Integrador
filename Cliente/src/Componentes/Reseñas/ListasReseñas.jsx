import React, { useState } from "react";
import styles from "../../Estilos/ListaReseñas.module.css";
import EditarReseña from "./EditarReseña";
import EliminarReseña from "./EliminarReseña";

export default function ListaReseñas({ reseñas, setReseñas }) {
  const [editIndex, setEditIndex] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(null);



  const handleSaveEdit = (editedReseña) => {
    // Lógica para guardar la reseña editada
    // Puedes agregar la lógica para actualizar la reseña en el servidor aquí.
    reseñas[editIndex] = editedReseña;
    setEditIndex(null);
  };

  const handleDelete = () => {
    // Lógica para eliminar la reseña
    // Puedes agregar la lógica para eliminar la reseña en el servidor aquí.
    reseñas.splice(deleteIndex, 1);
    setDeleteIndex(null);
  };

  return (
    <div className={styles.reseñas}>
      {reseñas.length > 0 ? (
        reseñas.map((reseña, index) => (
          <div key={index} className={styles.reseña}>
            <div className={styles.reseñaHeader}>
              <p className={styles.rating}>Rating: {reseña.puntuacion}</p>
              <div className={styles.actions}>
                <button onClick={() => setEditIndex(index)}>Editar</button>
                <button onClick={() => setDeleteIndex(index)}>Eliminar</button>
              </div>
            </div>
            <p className={styles.comentario}>Comentario: {reseña.comentario}</p>
            {editIndex === index && (
              <EditarReseña
                reseña={reseña}
                onSave={handleSaveEdit}
                onCancel={() => setEditIndex(null)}
              />
            )}
            {deleteIndex === index && (
              <EliminarReseña
                onDelete={handleDelete}
                onCancel={() => setDeleteIndex(null)}
              />
            )}
          </div>
        ))
      ) : (
        <p>No hay reseñas todavía</p>
      )}
    </div>
  );
}
