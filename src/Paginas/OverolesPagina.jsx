import React from "react";
import NavBar from "../Componentes/NavBar/NavBar";
import Filtros from "../Componentes/Filtros/Filtros";
import CarruselProducto from "../Componentes/CarruselProducto/CarruselProducto.jsx";
import Footer from "../Componentes/Footer/Footer.jsx";
import "../Estilos/OverolesPagina.css";

export default function OverolesPagina() {
  return (
    <>
      <NavBar></NavBar>
      <div className="container">
        <h1 className="titulo">OVEROLES</h1>
        <Filtros></Filtros>
      </div>

      <div className="carrusel-container">
        <CarruselProducto className="carrusel" />
        <CarruselProducto className="carrusel" />
      </div>

      <Footer></Footer>
    </>
  );
}
