import React, { useState } from "react";
import MetodoPago from "../Componentes/MetodoPago";
import Footer from "../Componentes/Footer";
import NavBar from "../Componentes/NavBar";

export default function MetodoPagoP() {
  const seccionesNav = [
    {
      id: 0,
      nombre: "ABOUT US",
    },
    {
      id: 1,
      nombre: "OVERALLS",
    },
    {
      id: 2,
      nombre: "HELMETS",
    },
    {
      id: 3,
      nombre: "OFFERS",
    },
    {
      id: 4,
      nombre: "REVIEWS",
    },
  ];
  return (
    <>
      <NavBar seccionesNav={seccionesNav} esSeccionCliente={true} />
      <MetodoPago></MetodoPago>
      <Footer></Footer>
    </>
  );
}
