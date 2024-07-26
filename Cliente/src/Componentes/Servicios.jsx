import React from "react";
import FrameTruck from "../Icons/FrameTruck.svg";
import FrameWhatsApp from "../Icons/FrameWhatsApp.svg";
import FrameCard1 from "../Icons/FrameCard1.svg";
import '../Estilos/Servicios.css';

export default function Servicios(){
    return(
        <div className="box_servicios">
            <div className="box_servicioInformacion">
               <img src={FrameTruck} alt="img" />
                <p className='informacion_servicios'>ENVÍOS A TODA LA <br /> REPÚBLICA MEXICANA</p>
            </div>
            <div className="box_servicioInformacion">
                <img className="imgwhatsapp" src={FrameWhatsApp} alt="img" />
                <p className='informacion_servicios whatsapp'>SERVICIO AL CLIENTE</p>
            </div>
            <div className="box_servicioInformacion">
            <img src={FrameCard1} alt="img" />
                <p className='informacion_servicios'>PAGOS SEGUROS</p>
            </div>
        </div> 
    );
}