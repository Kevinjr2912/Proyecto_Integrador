import React, { useState } from "react";
import styles from "../Estilos/Reseñas.module.css";

export default function Reseñas({ reseñas, agregarReseña, idProductos }) {
  const [activeTab, setActiveTab] = useState("Evaluacion");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editedReview, setEditedReview] = useState("");
  const [editedRating, setEditedRating] = useState(0);

  const handleRatingClick = (calificacion) => {
    setRating(calificacion);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleEditedReviewChange = (e) => {
    setEditedReview(e.target.value);
  };

  const handleEditedRatingChange = (calificacion) => {
    setEditedRating(calificacion);
  };

  const handleSendReview = async () => {
    if (review && rating) {
      const objResena = {
        idProductos: idProductos,
        comentario: review,
        puntuacion: rating
      };
  
      console.log(objResena);
  
      try {
        const response = await fetch("http://localhost:3000/resenas/addResena", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(objResena)
        });
  
        console.log(response);
        
        if (response.ok) {
          const result = await response.json();
          console.log('Reseña agregada exitosamente:', result);
          alert('Reseña agregada exitosamente');
          setRating(0);
          setReview("");
          agregarReseña({ comentario: review, puntuacion: rating });
        } else {
          console.log('Error al agregar reseña:', response.statusText);
          alert('Error al agregar reseña');
        }
      } catch (error) {
        console.log('Error de red:', error);
        alert('Error de red');
      }
    } else {
      alert('Por favor, completa todos los campos');
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedReview(reseñas[index].comentario);
    setEditedRating(reseñas[index].puntuacion);
  };

  const handleDelete = (index) => {
    // Lógica para eliminar reseña
  };

  const handleSaveEdit = () => {
    // Lógica para guardar la reseña editada
    setEditIndex(null);
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
                    <button onClick={() => handleEdit(index)}>Editar</button>
                    <button onClick={() => handleDelete(index)}>Eliminar</button>
                  </div>
                </div>
                <p className={styles.comentario}>Comentario: {reseña.comentario}</p>
                {editIndex === index && (
                  <div>
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
                  </div>
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
