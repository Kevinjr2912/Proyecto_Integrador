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

//
import React from "react";
import CarritoProducto from "../Componentes/Carrito/CarritoProducto";
import ResumenCompra from "../Componentes/Carrito/ResumenCompra";
import styles from "../Estilos/Carrito.module.css";

export default function CarritoP({ productos = [] }) {
  // verifica si productos es arry y no está vacío
  const productosArray = Array.isArray(productos) ? productos : [];

  const totalProductos = productosArray.reduce(
    (total, producto) => total + producto.cantidad,
    0
  );
  const totalPrecio = productosArray.reduce(
    (total, producto) =>
      total +
      producto.cantidad *
        parseFloat(producto.precio.replace("$", "").replace("MXN", "").trim()),
    0
  );

  return (
    <div className={styles.carrito}>
      <h2>Carrito de Compras</h2>
      <div className={styles.productos}>
        {productosArray.length > 0 ? (
          productosArray.map((producto, index) => (
            <CarritoProducto
              key={index}
              producto={producto}
              agregarAlCarrito={() => agregarAlCarrito(producto, cantidad)}
              quitarDelCarrito={() => quitarDelCarrito(producto)}
            />
          ))
        ) : (
          <p>No hay productos en el carrito.</p>
        )}
      </div>
      <ResumenCompra
        productos={totalProductos}
        envio="$50.00 MXN"
        total={`$${totalPrecio.toFixed(2)} MXN`}
      />
    </div>
  );
}
//40 lineas
