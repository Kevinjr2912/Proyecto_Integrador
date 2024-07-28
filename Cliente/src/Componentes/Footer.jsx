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
 
            <a className="footer-links_a" onClick={handleNavigateToFaqs} >FAQs</a>
            <span>|</span>
            <a className="footer-links_a" onClick={handleNavigateToNosotros} >Sobre nosotros </a>
            <span>|</span>
            <a className="footer-links_a" href="https://api.whatsapp.com/send?phone=1234567891&text=Hola,%20me%20gustaria%20Obtener%20m%C3%A1s%20informaci%C3%B3n" >Contacto</a>
        </div>
        <div class="footer-icons">
           
            <a href="https://www.instagram.com/f1owstoremx/" target="_blank" ><img src={FrameInstagram} alt="img" /></a>
            <a href="https://www.facebook.com/profile.php?id=61552626731205&locale=es_LA" target="_blank" ><img src={FrameFacebook} alt="img" /></a>
            <a href="https://x.com/F1owStoreMX" target="_blank" ><img src={FrameX} alt="img" /></a>
            <a href="https://www.tiktok.com/@f1owstoremx?lang=es" target="_blank" ><img src={FrameTikTok} alt="img" /></a>
            <a href=""><img src={FrameCard} alt="img" /></a>
            <a href=""><img src={FramePayPal} alt="img" /></a>
            
        </div>
  
    </footer>
    )
}