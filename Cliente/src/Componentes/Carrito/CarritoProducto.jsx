import React, { useState } from 'react';
import styles from '../../Estilos/Carrito.module.css';

export default function CarritoProducto({ producto, agregarAlCarrito, quitarDelCarrito }) {
  const [cantidad, setCantidad] = useState(producto.cantidad);

  const incrementarCantidad = () => {
    setCantidad(cantidad + 1);
    agregarAlCarrito({ ...producto, cantidad: 1 });
  };

  const disminuirCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
      agregarAlCarrito({ ...producto, cantidad: -1 });
    }
  };

  const eliminarProducto = () => {
    quitarDelCarrito(producto);
  };

  return (
    <div className={styles.producto}>
      <img src={`data:image/jpeg;base64,${producto.imagen}`} alt={producto.nombre} className={styles.imagen} />
      <div className={styles.detalles}>
        <h4>{producto.nombre}</h4>
        <p>Precio: <span className={styles.precio}>{producto.precio}</span></p>
        <div className={styles.cantidad}>
          <button onClick={disminuirCantidad}>-</button>
          <span>{producto.cantidad}</span>
          <button onClick={incrementarCantidad}>+</button>
        </div>
        <button onClick={eliminarProducto}>Eliminar</button>
      </div>
    </div>
  );
}
