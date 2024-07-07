import React from "react";
import '../Estilos/CardProducto.css';

export default function CardProducto(props){
    return(
        <div className="cardProducto">
            <div className="contenedor_img">
                <img className="producto" src={props.imagen} alt="" />
            </div>
            <div className="informacion_producto">
                <p className="nombreProducto"><strong>{props.nombre}</strong></p>
                <p className="precioProducto">{props.precio}</p>
            </div>
        </div>
    );
}