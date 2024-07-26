import React, { useState } from "react";
import MetodoPago from "../Componentes/MetodoPago";
import Footer from "../Componentes/Footer";
import NavBar from "../Componentes/NavBar";
import WhatsFlotante from "../Componentes/WhatsFlotante";
export default function MetodoPagoP() {
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
      <MetodoPago></MetodoPago>
      <Footer></Footer>
    </>
  );
}
