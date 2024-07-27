import React, { useEffect, useState } from "react";
import styles from "../../Estilos/ListaReseñas.module.css";
import EditarReseña from "./EditarReseña";
import EliminarReseña from "./EliminarReseña";

export default function ListaReseñas({ idProductos, idCliente }) {
  const [reseñas, setReseñas] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(null);

  // Función para obtener reseñas
  console.log("Este es el id del cliente " + idCliente);

  console.log(idProductos);

  const fetchReseñas = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/resenas/getResenas/${idProductos}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Datos recibidos:", data);
      setReseñas(data);
    } catch (error) {
      console.error("Error fetching reseñas:", error);
    }
  };

  // useEffect para llamar a fetchReseñas
  useEffect(() => {
    fetchReseñas();
  }, [idProductos]); // Dependencia en idProductos para refetch si cambia

  return (
    <div className={styles.reseñas}>
      {reseñas.length > 0 ? (
        reseñas.map((reseña, index) => (
          <div key={reseña.idReseñaProducto} className={styles.reseña}>
            <div className={styles.reseñaHeader}>
              <p className={styles.rating}>Rating: {reseña.puntuacion}</p>
              {idCliente === reseña.id_cliente && (
                <div className={styles.actions}>
                  <button onClick={() => setEditIndex(index)}>Editar</button>
                  <button onClick={() => setDeleteIndex(index)}>
                    Eliminar
                  </button>
                </div>
              )}
            </div>
            <p className={styles.comentario}>Comentario: {reseña.comentario}</p>
            {editIndex === index && (
              <EditarReseña
                reseña={reseña}
                onSave={(updatedReseña) => handleSaveEdit(index, updatedReseña)}
                onCancel={() => setEditIndex(null)}
              />
            )}
            {deleteIndex === index && (
              <EliminarReseña
                resenaId={reseña.idReseñaProducto}
                idClienteReseña={reseña.id_cliente}
                onDelete={() => handleDelete(index)}
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
