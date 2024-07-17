// import React, { useState } from 'react';
// import styles from '../Estilos/Carrito.module.css'; // Asegúrate de que la ruta es correcta

// export default function CarritoProducto({ producto, agregarAlCarrito, quitarDelCarrito }) {
//   const [cantidad, setCantidad] = useState(1);

//   const incrementarCantidad = () => setCantidad(cantidad + 1);
//   const disminuirCantidad = () => {
//     if (cantidad > 1) {
//       setCantidad(cantidad - 1);
//     }
//   };

//   return (
//     <div className={styles.producto}>
//       <img src={producto.imagen} alt={producto.nombre} className={styles.imagen} />
//       <div className={styles.detalles}>
//         <h4>{producto.nombre}</h4>
//         <p>Talla: {producto.talla}</p>
//         <p>Color: {producto.color}</p>
//         <p>
//           Precio: <span className={styles.precio}>${producto.precio}</span>
//           <span className={styles.precioAnterior}>${producto.precioAnterior}</span>
//         </p>
//         <div className={styles.cantidad}>
//           <button onClick={disminuirCantidad}>-</button>
//           <span>{cantidad}</span>
//           <button onClick={incrementarCantidad}>+</button>
//         </div>
//         <button onClick={() => agregarAlCarrito(producto, cantidad)}>Agregar</button>
//         <button onClick={() => quitarDelCarrito(producto)}>Eliminar</button>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import styles from '../Estilos/Carrito.module.css'; // Asegúrate de que la ruta es correcta

export default function CarritoProducto({ producto, agregarAlCarrito, quitarDelCarrito }) {
  const [cantidad, setCantidad] = useState(producto.cantidad);

  const incrementarCantidad = () => setCantidad(cantidad + 1);
  const disminuirCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div className={styles.producto}>
      <img src={producto.img_principal} alt={producto.nombre} className={styles.imagen} />
      <div className={styles.detalles}>
        <h4>{producto.nombre}</h4>
        <p>Precio: <span className={styles.precio}>{producto.precio}</span></p>
        <div className={styles.cantidad}>
          <button onClick={disminuirCantidad}>-</button>
          <span>{cantidad}</span>
          <button onClick={incrementarCantidad}>+</button>
        </div>
        <button onClick={() => agregarAlCarrito(producto, cantidad)}>Agregar</button>
        <button onClick={() => quitarDelCarrito(producto)}>Eliminar</button>
      </div>
    </div>
  );
}
