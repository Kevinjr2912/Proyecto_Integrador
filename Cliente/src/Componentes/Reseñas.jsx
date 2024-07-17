import React, { useState } from "react";
import styles from "../Estilos/Reseñas.module.css";

export default function Reseñas({ reseñas, agregarReseña }) {
  const [activeTab, setActiveTab] = useState("Evaluacion");
  const [rating, setRating] = useState(0);
  const [hoverRating] = useState(0);
  const [review, setReview] = useState("");

  const handleRatingClick = (calificacion) => {
    setRating(calificacion);
  };


  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleSendClick = () => {
    if (agregarReseña) {
      agregarReseña({ rating, comentario: review });
      setRating(0);
      setReview("");
    } else {
      console.error("agregarReseña no está definido");
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
                className={`${styles.estrella} ${estrella <= (hoverRating || rating) ? styles.selected : ""}`}
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
          <button className={styles.sendButton} onClick={handleSendClick}>Enviar</button>
        </div>
      )}

      {activeTab === "reseñas" && (
        <div>
          {reseñas.length > 0 ? (
            reseñas.map((reseña, index) => (
              <div key={index} className={styles.reseña}>
                <p className={styles.rating}>Rating: {reseña.rating}</p>
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
