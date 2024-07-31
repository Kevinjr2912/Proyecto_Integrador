import React, { useState } from "react";
import Login from "../Componentes/Login";
import NavBar from "../Componentes/NavBar";
import WhatsFlotante from "../Componentes/WhatsFlotante";
import Footer from "../Componentes/Footer";

export default function LoginPagina() {
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
      <WhatsFlotante />
      <NavBar
        seccionesNav={seccionesNav}
        esSeccionCliente={true}
      />
      <Login/>
      <Footer />
    </>
  );
}