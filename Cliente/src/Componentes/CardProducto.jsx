import React from "react";
import '../Estilos/CardProducto.css';

export default function CardProducto({key,src,alt,nombre,precio}){
    return(
        <div key={key} className="cardProducto">
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