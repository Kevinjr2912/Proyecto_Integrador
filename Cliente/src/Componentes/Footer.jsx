import React from "react";
import '../Estilos/Footer.css';
import FrameInstagram from"../Icons/FrameInstagram.svg";
import FrameFacebook from"../Icons/FrameFacebook.svg";
import FrameX from "../Icons/FrameX.svg";
import FrameTikTok from "../Icons/FrameTikTok.svg";
import FrameCard from  "../Icons/FrameCard.svg";
import FramePayPal from "../Icons/FramePayPal.svg";


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
            <img src={FrameInstagram} alt="img" />
            <img src={FrameFacebook} alt="img" />
            <img src={FrameX} alt="img" />
            <img src={FrameTikTok} alt="img" />
            <img src={FrameCard} alt="img" />
            <img src={FramePayPal} alt="img" />
            
        </div>
  
    </footer>
    )
}