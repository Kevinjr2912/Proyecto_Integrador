import React from "react";
import '../Estilos/Footer.css'

export default function Footer(){
    return(
        <footer class="footer">
        <div class="footer-links">
            <a href="#faqs">FAQs</a>
            <span>|</span>
            <a href="#about-us">Sobre nosotros</a>
            <span>|</span>
            <a href="#contact">Contacto</a>
            <span>|</span>
            <a href="#reviews">Reviews</a>
        </div>
        <div class="footer-icons">
            <a href="#"><i class="material-icons">instagram</i></a>
            <a href="#"><i class="material-icons">facebook</i></a>
            <a href="#"><i class="material-icons">youtube</i></a>
            <a href="#"><i class="material-icons">twitter</i></a>
            <a href="#"><i class="material-icons">tiktok</i></a>
            <a href="#"><i class="material-icons">paypal</i></a>
            <a href="#"><i class="material-icons">whatsapp</i></a>
        </div>
  
    </footer>
    )
}