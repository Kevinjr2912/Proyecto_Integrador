import React from 'react';
import '../Estilos/DescripcionProducto.css';

export default function DescripcionProducto( {descripcion} ){
    return(
        <div className="contenedor">
            <p className="descripcion">{descripcion}</p>
        </div>
    );
}