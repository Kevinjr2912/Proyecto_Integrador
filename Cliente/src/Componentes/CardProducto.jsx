import React from "react";
import { useNavigate } from "react-router-dom";
import '../Estilos/CardProducto.css';

export default function CardProducto({ id, src, alt, nombre, precio }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/informacionProducto/${id}`);
  };

  return (
    <div className="cardProducto" onClick={handleClick}>
      <div className="contenedor_img">
        <img className="producto" src={src} alt={alt} />
      </div>
      <div className="informacion_producto">
        <p className="nombreProducto"><strong>{nombre}</strong></p>
        <p className="precioProducto">${precio} MXN</p>
      </div>
    </div>
  );
}
