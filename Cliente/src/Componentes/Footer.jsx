import { useNavigate } from "react-router-dom";
import React from "react";
import '../Estilos/Footer.css';
import FrameInstagram from"../Icons/FrameInstagram.svg";
import FrameFacebook from"../Icons/FrameFacebook.svg";
import FrameX from "../Icons/FrameX.svg";
import FrameTikTok from "../Icons/FrameTikTok.svg";
import FrameCard from  "../Icons/FrameCard.svg";
import FramePayPal from "../Icons/FramePayPal.svg";


export default function Footer(){

    const navigate = useNavigate();

    const handleNavigateToFaqs = () => {
        navigate("/faqs");
      };

      
      const handleNavigateToNosotros = () => {
        navigate("/");
      };

      const handleNavigateToContacto = () => {
        navigate("/");
      };

    return(
        <footer class="footer">
        <div class="footer-links">
 
            <a onClick={handleNavigateToFaqs} >FAQs</a>
            <span>|</span>
            <a onClick={handleNavigateToNosotros}>Sobre nosotros</a>
            <span>|</span>
            <a href="https://api.whatsapp.com/send?phone=1234567891&text=Hola,%20me%20gustaria%20Obtener%20m%C3%A1s%20informaci%C3%B3n" >Contacto</a>
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