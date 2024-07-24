import React, { useState } from "react";
import styles from "../Estilos/Reseñas.module.css";

export default function Reseñas({ reseñas, agregarReseña, idProductos }) {
  const [activeTab, setActiveTab] = useState("Evaluacion");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleRatingClick = (calificacion) => {
    setRating(calificacion);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleSendReview = async () => {
    if (review && rating) {
      const objResena = {
        idProductos: 2,
        comentario: review,
        puntuacion: rating
      };
  
      console.log(objResena);
  
      try {
        const response = await fetch("http://localhost:3000/resenas/addResena", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json' // Añadir este encabezado
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

  return (
    <div className={styles.reseñas}>
      <div className={styles.tabContainer}>
        <div
          className={`${styles.tab} ${activeTab === "Evaluacion" ? styles.active : ""}`}
          onClick={() => setActiveTab("Evaluacion")}
        >
          Evaluacion
        </div>
        <div
          className={`${styles.tab} ${activeTab === "reseñas" ? styles.active : ""}`}
          onClick={() => setActiveTab("reseñas")}
        >
          Reseñas
        </div>
      </div>

      {activeTab === "Evaluacion" && (
        <div>
          <div>Puntuacion</div>
          <div className={styles.starContainer}>
            {[1, 2, 3, 4, 5].map((estrella) => (
              <span
                key={estrella}
                className={`${styles.estrella} ${estrella <= rating ? styles.selected : ""}`}
                onClick={() => handleRatingClick(estrella)}
              >
                ★
              </span>
            ))}
          </div>
          <div>Deja tu reseña</div>
          <textarea
            className={styles.textArea}
            value={review}
            onChange={handleReviewChange}
          ></textarea>
          <button className={styles.sendButton} onClick={handleSendReview}>Enviar</button>
        </div>
      )}

      {activeTab === "reseñas" && (
        <div>
          {reseñas.length > 0 ? (
            reseñas.map((reseña, index) => (
              <div key={index} className={styles.reseña}>
                <p className={styles.rating}>Rating: {reseña.puntuacion}</p>
                <p className={styles.comentario}>Comentario: {reseña.comentario}</p>
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
