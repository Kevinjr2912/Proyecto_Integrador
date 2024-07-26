import React from "react";

import NavBar from "../Componentes/NavBar";
import Footer from "../Componentes/Footer";
import WhatsFlotante from "../Componentes/WhatsFlotante";
import Ordenes from "../Componentes/Ordenes";
export default function OrdenesP() {
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

  const orderData = {
    nombreProducto: "Product Name",
    fechaVenta: "2023-07-25",
    linkEnvio: "http://example.com/shipping",
    autorizacion: true
  };

  return (
    <>
    <WhatsFlotante></WhatsFlotante>
    <Ordenes
            nombreProducto={orderData.nombreProducto}
            fechaVenta={orderData.fechaVenta}
            linkEnvio={orderData.linkEnvio}
            autorizacion={orderData.autorizacion}

    ></Ordenes>
    <NavBar seccionesNav={seccionesNav} esSeccionCliente={true} />
      <Footer></Footer>
    </>
  );
}
