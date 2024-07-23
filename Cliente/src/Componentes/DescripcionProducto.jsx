import React from 'react';
import '../Estilos/DescripcionProducto.css';

export default function DescripcionProducto( {descripcion} ){
    return(
        <div className="contenedor">
            <p className='descripcion'>Descripción :</p>
            <p className="descripcionContenido">{descripcion}</p>
        </div>
    );
}