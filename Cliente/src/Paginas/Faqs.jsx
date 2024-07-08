import React from "react";
import NavBar from "../Componentes/NavBar";
import Footer from "../Componentes/Footer";
import "../Estilos/Faqs.css";

export default function Faqs() {
  return (
    <>
      <NavBar></NavBar>

      <section class="faqs">
        <h2 class="faqs-title">FAQs</h2>
        <div class="faq-item">
          <input type="checkbox" id="faq1" class="faq-checkbox" />
          <label for="faq1" class="faq-question">
            <p>Primera pregunta</p>
            <span class="toggle-icon">+</span>
          </label>
          <div class="faq-answer">
            <p>La respuesta jejej</p>
          </div>
        </div>
        <div class="faq-item">
          <input type="checkbox" id="faq2" class="faq-checkbox" />
          <label for="faq2" class="faq-question">
            <p>Segunda pregunta</p>
            <span class="toggle-icon">+</span>
          </label>
          <div class="faq-answer">
            <p>Respues jeje</p>
          </div>
        </div>
        <div class="faq-item">
          <input type="checkbox" id="faq3" class="faq-checkbox" />
          <label for="faq3" class="faq-question">
            <p>tercera pregunta jejeje</p>
            <span class="toggle-icon">+</span>
          </label>
          <div class="faq-answer">
            <p>respuestita</p>
          </div>
        </div>
        <div class="faq-item">
          <input type="checkbox" id="faq4" class="faq-checkbox" />
          <label for="faq4" class="faq-question">
            <p>Cuarta pregunta jejeje</p>
            <span class="toggle-icon">+</span>
          </label>
          <div class="faq-answer">
            <p>respuestita</p>
          </div>
        </div>
        <div class="faq-item">
          <input type="checkbox" id="faq5" class="faq-checkbox" />
          <label for="faq5" class="faq-question">
            <p>Quinta pregunta jejeje</p>
            <span class="toggle-icon">+</span>
          </label>
          <div class="faq-answer">
            <p>respuestita</p>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
