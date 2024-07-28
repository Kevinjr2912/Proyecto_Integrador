import React from "react";
import NavBar from "../Componentes/NavBar";
import Footer from "../Componentes/Footer";
import styles from "../Estilos/Faqs.module.css";

export default function Faqs() {
  const seccionesNav = [
    {
      id: 0,
      nombre: "CONOCENOS",
    },
    {
      id: 1,
      nombre: "OVEROLES",
    },
    {
      id: 2,
      nombre: "CASCOS",
    },
    {
      id: 3,
      nombre: "MIS ORDENES",
    },
  ];

  const faqsData = [
    { question: "¿Cómo puedo saber cuál es mi talla?", answer: "En nuestra página web y en tienda contamos con una guía de tallas detallada. También puedes contactarnos." },
    { question: "¿Cuáles son las formas de pago que aceptan?", answer: "Aceptamos pagos con transferencias bancarias y por transferencia en PayPal." },
    { question: "¿Ofrecen envío a todo el país de México?", answer: "Sí, realizamos envíos a todo el territorio mexicano." },
    { question: "¿Puedo personalizar el número y nombre en el casco?", answer: "Sí, ofrecemos servicio de personalización de cascos. Puedes elegir el número y nombre que desees, y nosotros lo aplicaremos." },
    { question: "¿Tienen tienda física?", answer: "Por el momento, no contamos con una tienda física más que tienda online." },
  ];

  return (
    <>
      <NavBar seccionesNav={seccionesNav} esSeccionCliente={true} />
      <section className={styles.faqs}>
        <h2 className={styles.faqsTitle}>FAQs</h2>
        {faqsData.map((faq, index) => (
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
