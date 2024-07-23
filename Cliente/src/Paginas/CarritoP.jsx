// import React, { useState } from 'react';
// import CarritoProducto from '../Componentes/CarritoProducto';
// import styles from '../Estilos/Carrito.module.css';

// export default function CarritoP() {
//   const [productos, setProductos] = useState([
//     {
//       id: 1,
//       nombre: 'Producto 1',
//       talla: 'CH',
//       color: 'Negro',
//       precio: 10.0,
//       precioAnterior: 20.0,
//       imagen: 'https://via.placeholder.com/100',
//     },
//     {
//       id: 2,
//       nombre: 'Producto 2',
//       talla: 'M',
//       color: 'Rojo',
//       precio: 15.0,
//       precioAnterior: 30.0,
//       imagen: 'https://via.placeholder.com/100',
//     },

//   ]);

//   const agregarAlCarrito = (producto, cantidad) => {
//     console.log(`Agregar ${cantidad} de ${producto.nombre} al carrito`);
//   };

//   const quitarDelCarrito = (producto) => {
//     console.log(`Quitar ${producto.nombre} del carrito`);
//   };

//   return (
//     <div className={styles.carrito}>
//       <h2>Shopping Cart</h2>
//       {productos.map((producto) => (
//         <CarritoProducto
//           key={producto.id}
//           producto={producto}
//           agregarAlCarrito={agregarAlCarrito}
//           quitarDelCarrito={quitarDelCarrito}
//         />
//       ))}
//     </div>
//   );
// }
//50 lineas

import React from 'react';
import CarritoProducto from '../Componentes/Carrito/CarritoProducto';
import ResumenCompra from '../Componentes/Carrito/ResumenCompra';
import styles from '../Estilos/Carrito.module.css';
import Swal from 'sweetalert2';

export default function CarritoP({
  productos = [],
  agregarAlCarrito,
  quitarDelCarrito,
}) {
  // Asegúrate de que productos sea un array válido
  const productosArray = Array.isArray(productos) ? productos : [];

  // Calcula el total de productos
  const totalProductos = productosArray.reduce(
    (total, producto) => total + (producto.cantidad || 0),
    0
  );

  // Calcula el total de precio
  const totalPrecio = productosArray.reduce(
    (total, producto) => {
      // Asegúrate de que el precio sea un número válido
      const precio = parseFloat(String(producto.precio).replace("$", "").replace("MXN", "").trim());
      return total + (producto.cantidad || 0) * (isNaN(precio) ? 0 : precio);
    },
    0
  );

  // Función para quitar un producto del carrito
  const handleQuitarDelCarrito = (producto) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: `Eliminar ${producto.nombre} del carrito`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        quitarDelCarrito(producto);
        Swal.fire(
          'Eliminado',
          `${producto.nombre} ha sido eliminado del carrito.`,
          'success'
        );
      }
    });
  };

  return (
    <div className={styles.carrito}>
      <h2>Carrito de Compras</h2>
      <div className={styles.productos}>
        {productosArray.length > 0 ? (
          productosArray.map((producto, index) => (
            <CarritoProducto
              key={index}
              producto={producto}
              agregarAlCarrito={agregarAlCarrito}
              quitarDelCarrito={handleQuitarDelCarrito}
            />
          ))
        ) : (
          <p>No hay productos en el carrito.</p>
        )}
      </div>
      <ResumenCompra
        productos={totalProductos}
        total={`$${totalPrecio.toFixed(2)} MXN`}
      />
    </div>
  );
}
