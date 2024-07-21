import React from "react";
import NavBar from "../Componentes/NavBar";
import Filtros from "../Componentes/Filtros";
import Footer from "../Componentes/Footer.jsx";
import styles from "../Estilos/CascosPagina.module.css";

export default function OverolesPagina() {
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
    <NavBar seccionesNav={seccionesNav} esSeccionCliente={true} />
    <div className={styles.paginacontainer}>
    <div className={styles.container}>
    <h1 className={styles.titulo}>OVEROLES</h1>
        <Filtros></Filtros>
      </div>

      <div className={styles.carruselContainer}>
      <CarruselProducto className={styles.carrusel} />
      <CarruselProducto className={styles.carrusel} />
      </div>

      <Footer></Footer>
      </div>
    </>
  );
}
