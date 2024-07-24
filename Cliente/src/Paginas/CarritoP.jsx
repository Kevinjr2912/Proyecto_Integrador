import React, { useEffect, useState } from 'react';
import CarritoProducto from '../Componentes/Carrito/CarritoProducto';
import ResumenCompra from '../Componentes/Carrito/ResumenCompra';
import styles from '../Estilos/Carrito.module.css';
import Swal from 'sweetalert2';

export default function CarritoP() {
  const [dataProducts, setDataProducts] = useState([]);
  const [purchaseSummary,setPurchaseSummary] = useState([]);

  const cargarProductosCarrito = async () => {
    try {
      const [response1, response2] = await Promise.all([
        fetch(`http://localhost:3000/cars/getProductsCar/12`),
        fetch(`http://localhost:3000/cars/getPurchaseSummary/12`),
      ]);

      if (response1.ok && response2.ok) {
        const data1 = await response1.json();
        setDataProducts(data1);

        const data2 = await response2.json();
        console.log(data2);
        setPurchaseSummary(data2);
      }

    } catch (err) {
      console.log("Error al enviar la petición al servidor");
    }
  };

  useEffect(() => {
    cargarProductosCarrito();
  }, []);

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
          `${producto.nombre} ha sido eliminado del carrito`,
          'success'
        );
      }
    });
  };

  const agregarAlCarrito = (producto) => {
    console.log("Agregar al carrito:", producto);
  };

  const quitarDelCarrito = (producto) => {
    console.log("Eliminar del carrito:", producto);
  };

  return (
    <div className={styles.carrito}>
      <h2>Carrito de Compras</h2>
      <div className={styles.productos}>
        {
          dataProducts.length > 0 ? (
            dataProducts.map((producto) => (
              <CarritoProducto
                key={producto.idProducto}
                producto={producto}
                agregarAlCarrito={agregarAlCarrito}
                quitarDelCarrito={handleQuitarDelCarrito}
              />
            ))
          ) : (<p>No hay productos en el carrito.</p>)
        }
      </div>
      <ResumenCompra 
        productos={purchaseSummary.cantidad} 
        total={purchaseSummary.precioTotal} 
      />

    </div>
  );
}

// total=
