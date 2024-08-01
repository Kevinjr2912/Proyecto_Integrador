import React, { useState, useEffect } from "react";
import "../Estilos/MetodoEnvio.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function MetodoEnvio() {
  const [customerAddress, setCustomerAddress] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const idCliente = localStorage.getItem("idCliente");
  const handleContinuarClick = () => {
    if (customerAddress.length === 0) {
      Swal.fire({
        title: "¡Atención!",
        text: "No tienes una dirección de envío. Agrega una antes de continuar.",
        icon: "warning",
        confirmButtonText: "Entendido",
      });
    } else {
      navigate("/carritoPago/metodoEnvio/metodoPago");
    }
  };

  const handleDireccionEnvio = () => {
    navigate("/datosEnvio");
  };

  const verifyShippingInformation = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/shippingData/getCustomerAddress/${idCliente}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setCustomerAddress(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    verifyShippingInformation();
  }, []);

  return (
    <div className="main-container">
      <div className="tituloEnvio">
        <h1>Método de envío</h1>
      </div>
      <div className="metodo-container">
        <div className="direccion-container">
          <h3>Enviar a casa</h3>
          <div className="textoDireccion">
            {customerAddress.length > 0 ? (
              <p>
                {customerAddress[0].calle} {customerAddress[0].numeroExterior}{" "}
                {customerAddress[0].nombre_municipio}
              </p>
            ) : (
              <p> No tienes una dirección de envío</p>
            )}
          </div>
          <hr />
          <button onClick={handleDireccionEnvio} className="direccion-button">
            Editar o agregar nueva dirección
          </button>
        </div>
        <button onClick={handleContinuarClick} className="continuar-button">
          Continuar
        </button>
      </div>
    </div>
  );
}
