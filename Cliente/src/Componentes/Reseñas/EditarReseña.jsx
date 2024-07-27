import React, { useState } from "react";
import styles from "../../Estilos/EditarReseña.module.css";

export default function EditarReseña({ reseña, onSave, onCancel }) {
  const [editedReview, setEditedReview] = useState(reseña.comentario);
  const [editedRating, setEditedRating] = useState(reseña.puntuacion);

  console.log(reseña);
  const idResenaProducto = reseña.idReseñaProducto;

  const handleEditedReviewChange = (e) => {
    setEditedReview(e.target.value);
  };

  const handleEditedRatingChange = (calificacion) => {
    setEditedRating(calificacion);
  };

  const handleSaveEdit = async () => {
    const updatedReview = {
      comentario: editedReview,
      puntuacion: editedRating,
    };

    console.log(updatedReview.comentario);
    console.log(updatedReview.puntuacion);

    try {
      const response = await fetch(
        `http://localhost:3000/resenas/updateResena/${idResenaProducto}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedReview),
        }
      );

      // Depuración de la respuesta
      console.log("Response object:", response);
      console.log("Response status:", response.status);
      console.log("Response status text:", response.statusText);

      if (response.ok) {
        const data = await response.json();
        onSave(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.editarReseña}>
      <textarea
        className={styles.textArea}
        value={editedReview}
        onChange={handleEditedReviewChange}
      />
      <div className={styles.starContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`${styles.estrella} ${
              editedRating >= star ? styles.selected : ""
            }`}
            onClick={() => handleEditedRatingChange(star)}
          >
            ★
          </span>
        ))}
      </div>
      <button className={styles.saveButton} onClick={handleSaveEdit}>
        Guardar
      </button>
      <button className={styles.cancelButton} onClick={onCancel}>
        Cancelar
      </button>
    </div>
  );
}
