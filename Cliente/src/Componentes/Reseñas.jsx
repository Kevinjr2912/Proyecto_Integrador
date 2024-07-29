import React, { useState } from "react";
import styles from "../Estilos/Reseñas.module.css";
import ListaReseñas from "./Reseñas/ListasReseñas";

<<<<<<< HEAD
export default function Reseñas({ reseñas, agregarReseña, idProductos }) {
=======
export default function Reseñas({ reseñas, agregarReseña, idProducto }) {
>>>>>>> 073de4a1e0b822c7eddf6e7be1e6fcb83fe69e88
  const [activeTab, setActiveTab] = useState("Evaluacion");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const idCliente = 1;


  //Tenemos que hacer que idCliente se vaya pasando en el front
  const idCliente = 12;

  console.log("Este es el id del producto que va a ser reseñado " + idProducto)

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

<<<<<<< HEAD
      try {
        const response = await fetch(`http://localhost:3000/resenas/addResena/${idCliente}/${idProductos}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(objResena),
        });

        if (response.ok) {
          const result = await response.json();
          alert('Reseña agregada exitosamente');
=======
      console.log(objResena)

      try {
        const response = await fetch(
          `http://localhost:3000/resenas/addResena/${idCliente}/${idProducto}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(objResena),
          }
        );

        if (response.ok) {
          const result = await response.json();
          alert("Reseña agregada exitosamente");
>>>>>>> 073de4a1e0b822c7eddf6e7be1e6fcb83fe69e88
          setRating(0);
          setReview("");
          agregarReseña({ comentario: review, puntuacion: rating });
        } else {
<<<<<<< HEAD
          alert('Error al agregar reseña');
        }
      } catch (error) {
        alert('Error de red');
      }
    } else {
      alert('Por favor, completa todos los campos');
=======
          alert("Error al agregar reseña");
        }
      } catch (error) {
        alert("Error de red");
      }
    } else {
      alert("Por favor, completa todos los campos");
>>>>>>> 073de4a1e0b822c7eddf6e7be1e6fcb83fe69e88
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
<<<<<<< HEAD
          className={`${styles.tab} ${activeTab === "Reseñas" ? styles.active : ""}`}
=======
          className={`${styles.tab} ${
            activeTab === "Reseñas" ? styles.active : ""
          }`}
>>>>>>> 073de4a1e0b822c7eddf6e7be1e6fcb83fe69e88
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
<<<<<<< HEAD
                className={`${styles.estrella} ${rating >= star ? styles.selected : ""}`}
=======
                className={`${styles.estrella} ${
                  rating >= star ? styles.selected : ""
                }`}
>>>>>>> 073de4a1e0b822c7eddf6e7be1e6fcb83fe69e88
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
<<<<<<< HEAD
        <ListaReseñas reseñas={reseñas} setReseñas={agregarReseña} idProductos={idProductos} idCliente={idCliente}/>
=======
        <ListaReseñas
          reseñas={reseñas}
          setReseñas={agregarReseña}
          idProducto={idProducto}
          idCliente={idCliente}
        />
>>>>>>> 073de4a1e0b822c7eddf6e7be1e6fcb83fe69e88
      )}
    </div>
  );
}
