import React, { useState } from "react";
import styles from "../../Estilos/EditarReseña.module.css";

export default function EditarReseña({ reseña, onSave, onCancel }) {
  const [editedReview, setEditedReview] = useState(reseña.comentario);
  const [editedRating, setEditedRating] = useState(reseña.puntuacion);

<<<<<<< HEAD
  console.log(reseña)
  const idResenaProducto = reseña.idReseñaProducto;

=======
  console.log(reseña.idResenaProducto, reseña.comentario, reseña.puntuacion);
>>>>>>> 073de4a1e0b822c7eddf6e7be1e6fcb83fe69e88
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

<<<<<<< HEAD
    console.log(updatedReview.comentario)
    console.log(updatedReview.puntuacion)

    try{
      const response = await fetch(`http://localhost:3000/resenas/updateResena/${idResenaProducto}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedReview)
      });

      // Depuración de la respuesta
      console.log("Response object:", response);
      console.log("Response status:", response.status);
      console.log("Response status text:", response.statusText);

      if(response.ok){
        const data = await response.json();
        onSave(data)
      }
    }catch(err){
      console.log(err)
=======
    try {
      console.log("Antes de entrar al fetch " + reseña.idResenaProducto);
      const response = await fetch(
        `http://localhost:3000/resenas/updateResena/${reseña.idResenaProducto}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedReview),
        }
      );

      // Log del estado y la respuesta
      console.log("Response OK:", response.ok);
      console.log("Response Status:", response.status);
      console.log("Response Headers:", response.headers.get("Content-Type"));

      if (response.ok) {
        const data = await response.json();
        alert("Reseña editada exitosamente");
        onSave(data);
      }
    } catch (err) {
      alert("Error de red");
>>>>>>> 073de4a1e0b822c7eddf6e7be1e6fcb83fe69e88
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
<<<<<<< HEAD
            className={`${styles.estrella} ${editedRating >= star ? styles.selected : ""}`}
=======
            className={`${styles.estrella} ${
              editedRating >= star ? styles.selected : ""
            }`}
>>>>>>> 073de4a1e0b822c7eddf6e7be1e6fcb83fe69e88
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
