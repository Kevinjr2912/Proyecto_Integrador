import React from "react";
import Footer from "../Componentes/Footer.jsx";
import NavBar from "../Componentes/NavBar.jsx";
import WhatsFlotante from "../Componentes/WhatsFlotante.jsx";
import MetodoEnvio from "../Componentes/MetodoEnvio.jsx";

export default function MetodoEnvioP() {
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
  return (
    <>
      <WhatsFlotante></WhatsFlotante>
      <NavBar seccionesNav={seccionesNav} esSeccionCliente={true} />
      <MetodoEnvio></MetodoEnvio>
      <Footer></Footer>
    </>
  );
}
