import React, { useState } from "react";
import styles from "../Estilos/Reseñas.module.css";
import ListaReseñas from "./Reseñas/ListasReseñas";

export default function Reseñas({ reseñas, agregarReseña, idProducto }) {
  const [activeTab, setActiveTab] = useState("Evaluacion");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  //Tenemos que hacer que idCliente se vaya pasando en el front
  const token = localStorage.getItem("token");
  const idCliente = localStorage.getItem("idCliente");

  console.log("Este es el id del producto que va a ser reseñado " + idProducto);

  const handleRatingClick = (calificacion) => {
    setRating(calificacion);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleSendReview = async () => {
    if (review && rating) {
      const objResena = {
        comentario: review,
        puntuacion: rating,
      };

      console.log(objResena);

      try {
        const response = await fetch(
          `http://localhost:3000/resenas/addResena/${idCliente}/${idProducto}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(objResena),
          }
        );

        if (response.ok) {
          const result = await response.json();
          alert("Reseña agregada exitosamente");
          setRating(0);
          setReview("");
          agregarReseña({ comentario: review, puntuacion: rating });
        } else {
          alert("Error al agregar reseña");
        }
      } catch (error) {
        alert("Error de red");
      }
    } else {
      alert("Por favor, completa todos los campos");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabContainer}>
        <div
          className={`${styles.tab} ${
            activeTab === "Evaluacion" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("Evaluacion")}
        >
          Evaluación
        </div>
        <div
          className={`${styles.tab} ${
            activeTab === "Reseñas" ? styles.active : ""
          }`}
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
                className={`${styles.estrella} ${
                  rating >= star ? styles.selected : ""
                }`}
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
        <ListaReseñas
          reseñas={reseñas}
          setReseñas={agregarReseña}
          idProducto={idProducto}
        />
      )}
    </div>
  );
}
