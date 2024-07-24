import React, { useState } from "react";
import styles from "../Estilos/Reseñas.module.css";
import EditarReseña from "./Reseñas/EditarReseña";
import EliminarReseña from "./Reseñas/EliminarReseña";

export default function Reseñas({ reseñas, agregarReseña, idProductos }) {
  const [activeTab, setActiveTab] = useState("Evaluacion");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(null);

  const handleRatingClick = (calificacion) => {
    setRating(calificacion);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleSendReview = async () => {
    if (review && rating) {
      const objResena = {
        idProductos: idProductos,
        comentario: review,
        puntuacion: rating
      };
  
      try {
        const response = await fetch("http://localhost:3000/resenas/addResena", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(objResena)
        });
        
        if (response.ok) {
          const result = await response.json();
          alert('Reseña agregada exitosamente');
          setRating(0);
          setReview("");
          agregarReseña({ comentario: review, puntuacion: rating });
        } else {
          alert('Error al agregar reseña');
        }
      } catch (error) {
        alert('Error de red');
      }
    } else {
      alert('Por favor, completa todos los campos');
    }
  };

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
    <div className={styles.container}>
      <div className={styles.tabContainer}>
        <div
          className={`${styles.tab} ${activeTab === "Evaluacion" ? styles.active : ""}`}
          onClick={() => setActiveTab("Evaluacion")}
        >
          Evaluación
        </div>
        <div
          className={`${styles.tab} ${activeTab === "Reseñas" ? styles.active : ""}`}
          onClick={() => setActiveTab("Reseñas")}
        >
          Reseñas
        </div>
      </div>

      {activeTab === "Evaluacion" && (
        <div>
          <div className={styles.starContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`${styles.estrella} ${rating >= star ? styles.selected : ""}`}
                onClick={() => handleRatingClick(star)}
              >
                ★
              </span>
            ))}
          </div>
          <textarea
            className={styles.textArea}
            value={review}
            onChange={handleReviewChange}
          />
          <button className={styles.sendButton} onClick={handleSendReview}>
            Enviar
          </button>
        </div>
      )}

      {activeTab === "Reseñas" && (
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
      )}
    </div>
  );
}
