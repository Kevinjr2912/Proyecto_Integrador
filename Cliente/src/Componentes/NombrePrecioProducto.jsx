import React from "react";
import '../Estilos/NombrePrecioProducto.css';

export default function NombrePrecioProducto( {nombre,precio} ){
    return(
        <div className="container">
            <p className="name">{nombre}</p>
            <p className="price">${precio} MXN</p>
            
            
        </div>
    );
}