import React from "react";
import "../Estilos/MetodoEnvio.css";
import { useNavigate } from 'react-router-dom';

export default function MetodoEnvio() {
  const navigate = useNavigate();
  const handleContinuarClick = () => {
    navigate('/carritoPago/metodoEnvio/metodoPago');
  };

  const verifyShippinnInformation = async ()=>{
    try{
      const response = await fetch()
    }catch(err){
      console.log(err);
    }
  }
  

  return (
    <div className="main-container">
      <div className="tituloEnvio">
      <h1>Método de envío</h1>
      </div>
      <div className="metodo-container">
        <div className="direccion-container">
          <h3>Enviar a casa</h3>
         <div className="textoDireccion">
          <p></p>
          </div> 
          <hr />
          <button>Editar o agregar nueva direccion</button>
        </div>
        <button onClick={handleContinuarClick} className="continuar-button">Continuar</button>
      </div>
    </div>
  );
}
