<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CarritoProducto from "../Componentes/Carrito/CarritoProducto";
import ResumenCompra from "../Componentes/Carrito/ResumenCompra";
import MetodoEnvioP from "./MetodoEnvioP";
import styles from "../Estilos/Carrito.module.css";
import Swal from "sweetalert2";
import NavBar from "../Componentes/NavBar";
import WhatsFlotante from "../Componentes/WhatsFlotante";
import Footer from "../Componentes/Footer";
=======
import React, { useEffect, useState } from 'react';
import CarritoProducto from '../Componentes/Carrito/CarritoProducto';
import ResumenCompra from '../Componentes/Carrito/ResumenCompra';
import styles from '../Estilos/Carrito.module.css';
import Swal from 'sweetalert2';
import NavBar from '../Componentes/NavBar';

>>>>>>> nueva-rama
export default function CarritoP() {
  const seccionesNav = [
    {
      id: 0,
      nombre: "CONOCENOS",
    },
    {
      id: 1,
      nombre: "OVEROLES",
    },
    {
      id: 2,
      nombre: "CASCOS",
    },
    {
      id: 3,
      nombre: "MIS ORDENES",
    },
  ];

  const [dataProducts, setDataProducts] = useState([]);
<<<<<<< HEAD
  const [purchaseSummary, setPurchaseSummary] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
=======
  const [purchaseSummary,setPurchaseSummary] = useState([]);
  const seccionesNav = [
    { id: 0, nombre: "CONOCENOS" },
    { id: 1, nombre: "OVEROLES" },
    { id: 2, nombre: "CASCOS" },
    { id: 3, nombre: "MIS ORDENES" },
  ];
>>>>>>> nueva-rama

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
      title: "¿Estás seguro?",
      text: `Eliminar ${producto.nombre} del carrito`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        quitarDelCarrito(producto);
        Swal.fire(
          "Eliminado",
          `${producto.nombre} ha sido eliminado del carrito`,
          "success"
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
<<<<<<< HEAD
    <>
      <WhatsFlotante></WhatsFlotante>
      <NavBar seccionesNav={seccionesNav} esSeccionCliente={true}></NavBar>
=======
    <div className={styles.carrito}>
    <NavBar
    esSeccionCliente={true}
    seccionesNav={seccionesNav}
    />
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
>>>>>>> nueva-rama

      <div className={styles.carrito}>
        {location.pathname === "/carritoPago/metodoEnvio" ? (
          <MetodoEnvioP />
        ) : (
          <sdsdsdsds>
            <h2>Carrito de Compras</h2>
            <div className={styles.productos}>
              {dataProducts.length > 0 ? (
                dataProducts.map((producto) => (
                  <CarritoProducto
                    key={producto.idProducto}
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
              productos={purchaseSummary.cantidad}
              total={purchaseSummary.precioTotal}
            />
          </sdsdsdsds>
        )}
      </div>
      <Footer></Footer>
    </>
  );
}
