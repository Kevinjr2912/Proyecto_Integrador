import React, { useState } from 'react';
import styles from '../../Estilos/CarritoProducto.module.css';

export default function CarritoProducto({ producto, introducirAlCarrito, quitarDelCarrito }) {
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

  const añadirProducto=()=>{
    introducirAlCarrito(producto);
  }

  const eliminarProducto = () => {
    quitarDelCarrito(producto);
  };

  return (
    <div className={styles.producto}>
      <div className={styles.imagenCarrito}>
        <img src={`http://localhost:3000/uploads/${producto.filenameImagen}`} alt={producto.nombre} className={styles.imagen} />
      </div>
      <div className={styles.detalles}>
        <div className={styles.info}>
          <h4 className={styles.nombre}>{producto.nombre}</h4>
          <p>Precio: <span className={styles.precio}>{producto.precio}</span></p>
        </div>
        <div className={styles.acciones}>
          <div className={styles.cantidad}>
            <button onClick={disminuirCantidad}>-</button>
            <span>{cantidad}</span>
            <button onClick={incrementarCantidad}>+</button>
          </div>
          <button onClick={añadirProducto}>Añadir</button>
          <button onClick={eliminarProducto}>Eliminar</button>
        </div>
      </div>
    </div>
  );
}
