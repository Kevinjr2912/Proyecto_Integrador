import React from "react";
import NavBar from "../Componentes/NavBar";
import WhatsFlotante from "../Componentes/WhatsFlotante";
import Footer from "../Componentes/Footer";
import ShippingData from "../Componentes/ShippingData";
import styles from "../Estilos/DatoEnvioP.module.css";

export default function DatoEnvioP() {
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
      <NavBar seccionesNav={seccionesNav} esSeccionCliente={true} />
      <div className={styles.containerShippingData}>
        <div className={styles.subcontainerShippingData}>
          <h2 className={styles.tittleShippingData}>DATOS DE ENVÍO</h2>
          <ShippingData />
        </div>
      </div>
      <Footer />
    </>
  );
}
