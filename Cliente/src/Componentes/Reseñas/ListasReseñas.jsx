import React, { useEffect, useState } from "react";
import styles from "../../Estilos/ListaReseñas.module.css";
import EditarReseña from "./EditarReseña";
import EliminarReseña from "./EliminarReseña";
import Swal from "sweetalert2";

export default function ListaReseñas({ idProducto }) {
  const [reseñas, setReseñas] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const token = localStorage.getItem('token');
  const idCliente = localStorage.getItem('idCliente');

  const fetchReseñas = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/resenas/getResenas/${idProducto}`,{
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
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
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(updatedReseña),
        }
      );

      if (response.ok) {
        await response.json();
        fetchReseñas();
        Swal.fire({
          icon: "success",
          title: "Producto agregado exitosamente",
          showConfirmButton: false,
          timer: 1500,
        });
        setEditIndex(null);
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
          headers: {
            'Authorization': `Bearer ${token}`
          }
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

  return (
    <div className={styles.reseñas}>
      {reseñas.length > 0 ? (
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
