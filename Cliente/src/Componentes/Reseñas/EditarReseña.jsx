import React, { useState } from "react";
import styles from "../../Estilos/EditarReseña.module.css";

export default function EditarReseña({ reseña, onSave, onCancel }) {
  const [editedReview, setEditedReview] = useState(reseña.comentario);
  const [editedRating, setEditedRating] = useState(reseña.puntuacion);

  const handleEditedReviewChange = (e) => {
    setEditedReview(e.target.value);
  };

  const handleEditedRatingChange = (calificacion) => {
    setEditedRating(calificacion);
  };

  const handleSaveEdit = () => {
    onSave({
      ...reseña,
      comentario: editedReview,
      puntuacion: editedRating,
    });
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
            className={`${styles.estrella} ${editedRating >= star ? styles.selected : ""}`}
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
