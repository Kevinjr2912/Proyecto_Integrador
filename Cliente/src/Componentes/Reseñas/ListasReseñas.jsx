import React, { useEffect, useState } from "react";
import styles from "../../Estilos/ListaReseñas.module.css";
import EditarReseña from "./EditarReseña";
import EliminarReseña from "./EliminarReseña";

<<<<<<< HEAD
export default function ListaReseñas({ idProductos, idCliente }) {
=======
export default function ListaReseñas({ idProducto, idCliente }) {
>>>>>>> 073de4a1e0b822c7eddf6e7be1e6fcb83fe69e88
  const [reseñas, setReseñas] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(null);

  // Función para obtener reseñas
<<<<<<< HEAD
  console.log("Este es el id del cliente " + idCliente)
  
  console.log(idProductos)

  const fetchReseñas = async () => {
    try {
      const response = await fetch(`http://localhost:3000/resenas/getResenas/${idProductos}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log("Datos recibidos:", data);
      setReseñas(data);
    } catch (error) {
      console.error('Error fetching reseñas:', error);
    }
  };

  // useEffect para llamar a fetchReseñas
  useEffect(() => {
    fetchReseñas();
  }, [idProductos]); // Dependencia en idProductos para refetch si cambia
=======
  const fetchReseñas = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/resenas/getResenas/${idProducto}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setReseñas(data);
    } catch (error) {
      console.error("Error fetching reseñas:", error);
    }
  };

  useEffect(() => {
    fetchReseñas();
  }, [idProducto]);

  const handleSaveEdit = async (index, updatedReseña) => {
    try {
      const response = await fetch(
        `http://localhost:3000/resenas/updateResena/${updatedReseña.idResenaProducto}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedReseña),
        }
      );

      if (response.ok) {
        await response.json();
        fetchReseñas(); // Actualiza las reseñas después de la edición
        setEditIndex(null);
        alert("Reseña actualizada exitosamente");
      } else {
        alert("Error al actualizar la reseña");
      }
    } catch (error) {
      console.error("Error al actualizar reseña:", error);
    }
  };

  const handleDelete = async (index) => {
    try {
      const response = await fetch(
        `http://localhost:3000/resenas/deleteResena/${reseñas[index].idResenaProducto}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        await response.json();
        fetchReseñas(); // Actualiza las reseñas después de la eliminación
        alert("Reseña eliminada exitosamente");
      } else {
        alert("Error al eliminar la reseña");
      }
    } catch (error) {
      console.error("Error al eliminar reseña:", error);
    }
  };

  const renderStars = (rating) => {
    return [1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        className={star <= rating ? styles.selected : styles.star}
      >
        ★
      </span>
    ));
  };
>>>>>>> 073de4a1e0b822c7eddf6e7be1e6fcb83fe69e88

  return (
    <div className={styles.reseñas}>
      {reseñas.length > 0 ? (
<<<<<<< HEAD
        reseñas.map((reseña, index) => (
          <div key={reseña.idReseñaProducto} className={styles.reseña}>
            <div className={styles.reseñaHeader}>
              <p className={styles.rating}>Rating: {reseña.puntuacion}</p>
              {idCliente === reseña.id_cliente && (
                <div className={styles.actions}>
                  <button onClick={() => setEditIndex(index)}>Editar</button>
                  <button onClick={() => setDeleteIndex(index)}>Eliminar</button>
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
=======
        reseñas.map((reseña) => (
          <div key={reseña.idResenaProducto} className={styles.reseña}>
            <div className={styles.reseñaHeader}>
              <div className={styles.rating}>
                <p className={styles.puntuacion}>
                  Puntuación <span className={styles.renderStars}>{renderStars(reseña.puntuacion)}</span>
                </p>
              </div>
              {idCliente === reseña.idCliente && (
                <div className={styles.actions}>
                  <button onClick={() => setEditIndex(reseña.idResenaProducto)}>Editar</button>
                  <button onClick={() => setDeleteIndex(reseña.idResenaProducto)}>Eliminar</button>
                </div>
              )}
            </div>
            <div className={styles.containerComentario}>
              <p className={styles.comentario}>{reseña.comentario}</p>
            </div>
            {editIndex === reseña.idResenaProducto && (
              <EditarReseña
                reseña={reseña}
                onSave={(updatedReseña) => handleSaveEdit(reseña.idResenaProducto, updatedReseña)}
                onCancel={() => setEditIndex(null)}
              />
            )}
            {deleteIndex === reseña.idResenaProducto && (
              <EliminarReseña
                resenaId={reseña.idResenaProducto}
                onDelete={() => handleDelete(reseña.idResenaProducto)}
>>>>>>> 073de4a1e0b822c7eddf6e7be1e6fcb83fe69e88
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
