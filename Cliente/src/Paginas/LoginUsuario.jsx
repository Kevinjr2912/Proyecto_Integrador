import React, { useState } from "react";
import Login from "../Componentes/Login";
import NavBar from "../Componentes/NavBar";
import WhatsFlotante from "../Componentes/WhatsFlotante";
import Footer from "../Componentes/Footer";

export default function LoginPagina() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    // Navegar a la página de login o realizar otras acciones de logout
  };
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
        esSeccionCliente={!isAdmin}
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
      />
      <Login setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin} />
      <Footer />
    </>
  );
}