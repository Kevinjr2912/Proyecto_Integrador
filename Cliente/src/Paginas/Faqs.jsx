import React from "react";
import NavBar from "../Componentes/NavBar";
import Footer from "../Componentes/Footer";
import styles from "../Estilos/Faqs.module.css";

export default function Faqs() {
  const seccionesNav = [
    {
      id: 0,
      nombre: "ABOUT US",
    },
    {
      id: 1,
      nombre: "OVERALLS",
    },
    {
      id: 2,
      nombre: "HELMETS",
    },
    {
      id: 3,
      nombre: "OFFERS",
    },
    {
      id: 4,
      nombre: "REVIEWS",
    },
  ];

  return (
    <>
      <NavBar seccionesNav={seccionesNav} esSeccionCliente={true} />
      <section className={styles.faqs}>
        <h2 className={styles.faqsTitle}>FAQs</h2>
        {[
          { question: "hola mi nopmbre es andre julian gutierrez", answer: "La respuesta jejej" },
          { question: "Segunda pregunta", answer: "Respues jeje" },
          { question: "Tercera pregunta jejeje", answer: "Respuestita" },
          { question: "Cuarta pregunta jejeje", answer: "Respuestita" },
          { question: "Quinta pregunta jejeje", answer: "Respuestita" },
        ].map((faq, index) => (
          
          <div key={index} className={styles.faqItem}>
            <input type="checkbox" id={`faq${index}`} className={styles.faqCheckbox} />
            <label htmlFor={`faq${index}`} className={styles.faqQuestion}>
              <p>{faq.question}</p>
              <span className={styles.toggleIcon}>+</span>
            </label>
            <div className={styles.faqAnswer}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </>
  );
}
