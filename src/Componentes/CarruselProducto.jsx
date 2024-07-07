import React from "react";
import CardProducto from '../Componentes/CardProducto';
import imagen_home from '../Imagenes/imagen_home.jpg';
import '../Estilos/CarruselProducto.css'

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