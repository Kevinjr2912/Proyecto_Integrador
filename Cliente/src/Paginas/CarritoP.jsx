import React, { useState } from 'react';
import CarritoProducto from '../Componentes/CarritoProducto';
import styles from '../Estilos/Carrito.module.css';

export default function CarritoP() {
  const [productos, setProductos] = useState([
    {
      id: 1,
      nombre: 'Producto 1',
      talla: 'CH',
      color: 'Negro',
      precio: 10.0,
      precioAnterior: 20.0,
      imagen: 'https://via.placeholder.com/100',
    },
    {
      id: 2,
      nombre: 'Producto 2',
      talla: 'M',
      color: 'Rojo',
      precio: 15.0,
      precioAnterior: 30.0,
      imagen: 'https://via.placeholder.com/100',
    },
    // Agrega más productos según sea necesario
  ]);

  const agregarAlCarrito = (producto, cantidad) => {
    console.log(`Agregar ${cantidad} de ${producto.nombre} al carrito`);
  };

  const quitarDelCarrito = (producto) => {
    console.log(`Quitar ${producto.nombre} del carrito`);
  };

  return (
    <div className={styles.carrito}>
      <h2>Shopping Cart</h2>
      {productos.map((producto) => (
        <CarritoProducto
          key={producto.id}
          producto={producto}
          agregarAlCarrito={agregarAlCarrito}
          quitarDelCarrito={quitarDelCarrito}
        />
      ))}
    </div>
  );
}
