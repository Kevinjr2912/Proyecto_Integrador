import React from 'react';
import LogoF1 from '../Imagenes/LogoF1.png';
import '../Estilos/EncabezadoPagina.css';
import { useNavigate } from "react-router-dom";


export default function EncabezadoPagina({esSeccionCliente, titulo}){
    const navigate = useNavigate();

    const handleNavigateToInicio=()=>{
        navigate ("/");
    }
    

    if(esSeccionCliente){
        return <img className="logo_img" src={LogoF1} alt="Logo" onClick={handleNavigateToInicio} style={{ cursor: 'pointer' }} />
    }

    return <h2>{titulo}</h2>
}
