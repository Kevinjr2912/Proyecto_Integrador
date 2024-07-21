import React from "react";
import NavBar from "../Componentes/NavBar.jsx";
import Servicios from "../Componentes/Servicios.jsx";
import SeccionesTienda from "../Componentes/SeccionesTienda.jsx";
import "../Estilos/Home.css";
import Footer from "../Componentes/Footer.jsx";
import WhatsFlotante from "../Componentes/WhatsFlotante.jsx";
export default function Home() {
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

      <div className="home">
        <NavBar seccionesNav={seccionesNav} esSeccionCliente={true} />
        <div className="contenedor_carro">
          <img className="img_home" src={imagen_home} alt="Imagen carro" />
        </div>
        <Servicios />
        <div className="secciones">
          <SeccionesTienda
            seccionesNav={seccionesNav}
            esSeccionCliente={true}
            className="Hello"
          />
        </div>
        <CarruselProducto />
        <CarruselProducto />
      </div>
      <Footer></Footer>
    </>
  );
}
