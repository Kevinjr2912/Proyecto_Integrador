import React from 'react';
import CardProducto from './CardProducto';
import NewCarrusel from './NewCarrusel';
import imagen_home from '../Imagenes/imagen_home.jpg';
import '../Estilos/CarruselProducto.css';

const CarruselProducto = () => {
  return (
    <NewCarrusel>
      <CardProducto
        imagen={imagen_home}
        nombre="Casco Checo Pérez"
        precio="$1500.00 mx"
      />
      <CardProducto
        imagen={imagen_home}
        nombre="Casco Checo Pérez"
        precio="$1500.00 mx"
      />
      <CardProducto
        imagen={imagen_home}
        nombre="Casco Checo Pérez"
        precio="$1500.00 mx"
      />
      <CardProducto
        imagen={imagen_home}
        nombre="Casco Checo Pérez"
        precio="$1500.00 mx"
      />
      <CardProducto
        imagen={imagen_home}
        nombre="Casco Checo Pérez"
        precio="$1500.00 mx"
      />
      <CardProducto
        imagen={imagen_home}
        nombre="Casco Checo Pérez"
        precio="$1500.00 mx"
      />
      <CardProducto
        imagen={imagen_home}
        nombre="Casco Checo Pérez"
        precio="$1500.00 mx"
      />
      <CardProducto
        imagen={imagen_home}
        nombre="Casco Checo Pérez"
        precio="$1500.00 mx"
      />
    </NewCarrusel>
  );
};

export default CarruselProducto;