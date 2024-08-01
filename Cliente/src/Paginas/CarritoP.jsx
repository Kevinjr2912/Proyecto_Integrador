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
  const [purchaseSummary, setPurchaseSummary] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const idCliente = localStorage.getItem('idCliente');
  console.log("carrito p:", token, idCliente)

  const cargarProductosCarrito = async () => {
    try {
      const [response1, response2] = await Promise.all([
        fetch(`http://localhost:3000/cars/getProductsCar/${idCliente}`,{
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }),
        fetch(`http://localhost:3000/cars/getPurchaseSummary/${idCliente}`,{
          headers: {
                'Authorization': `Bearer ${token}`
              }
        })
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
    if (!token) {
      navigate('/loginUsuario');
      return;
    }
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
        
      }
    });
  };

  const handleAgregarAlCarrito = (producto) => {
    console.log("Agregar al carrito:", producto);
    Swal.fire({
      title: "¿Agregar al carrito?",
      text: `Agregando ${producto.nombre} al carrito`,
      icon: "success",
      showCancelButton: true,
      confirmButtonText: "Sí, añadir",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        introducirAlCarrito (producto);
        
      }
    });
  };

  const introducirAlCarrito = async (producto)=>{

  };

  const quitarDelCarrito = async (producto) => {
    console.log(producto)
    try{
      const response = await fetch(`http://localhost:3000/cars//deleteProductCar/${producto.idProducto}`,{
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({idCliente: 15
          
        }),
      });

      if(response.ok){
        Swal.fire(
          "Eliminado",
          `${producto.nombre} ha sido eliminado del carrito`,
          "success"
        );

        cargarProductosCarrito();
      }
    }catch(err){
      console.log(err);
    }
    console.log("Eliminar del carrito:", producto);
  };

  return (
    <>
      <WhatsFlotante></WhatsFlotante>
      <NavBar seccionesNav={seccionesNav} esSeccionCliente={true}></NavBar>

      <div className={styles.carrito}>
        {location.pathname === "/carritoPago/metodoEnvio" ? (
          <MetodoEnvioP />
        ) : (
          <>
            <div className={styles.productos}>
              <h2 className={styles.tituloCarrito}>Carrito de Compras</h2>
              {dataProducts.length > 0 ? (
                dataProducts.map((producto) => (
                  <CarritoProducto
                    key={producto.idProducto}
                    producto={producto}
                    agregarAlCarrito={handleAgregarAlCarrito}
                    quitarDelCarrito={handleQuitarDelCarrito}
                  />
                ))
              ) : (
                <p
                  style={{textAlign: 'center'}}
                >No hay productos en el carrito.</p>
              )}
            </div>
            <ResumenCompra
              productos={purchaseSummary.cantidad}
              total={purchaseSummary.precioTotal}
            />
            
          </>
        )}
      </div>
      <Footer></Footer>
    </>
  );
}
