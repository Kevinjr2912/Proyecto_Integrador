import React from "react";
import CardProducto from "../CardProducto/CardProducto";
import '../../Estilos/CarruselProducto.css';
import imagen_home from '../../Imagenes/imagen_home.jpg';

export default function CarruselProducto(){
    return(
        <div className="carrusel">
            <CardProducto
                imagen = {imagen_home}
                nombre = 'Casco Checo Pérez'
                precio = '$1500.00 mx'
            />
            <CardProducto
                imagen = {imagen_home}
                nombre = 'Casco Checo Pérez'
                precio = '$1500.00 mx'
            />
            <CardProducto
                imagen = {imagen_home}
                nombre = 'Casco Checo Pérez'
                precio = '$1500.00 mx'
            />
            <CardProducto
                imagen = {imagen_home}
                nombre = 'Casco Checo Pérez'
                precio = '$1500.00 mx'
            />
        </div>
    );
}