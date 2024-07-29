import React from "react";
import NavBar from "../Componentes/NavBar.jsx";
import "../Estilos/DetalleVentaP.module.css";
import DetalleVenta from "../Componentes/DetalleVenta/DetalleVenta.jsx";
import Footer from "../Componentes/Footer.jsx";
export default function DetalleVentaP() {

  const seccionesNav = [

    {
        id: 1,
        nombre: 'MENU',
        
    },
    {
        id: 3,
        nombre: 'GESTIÓN PRODUCTO',
    },
    {
        id: 3,
        nombre: 'DETALLES DE VENTA',
    }
];

  return (
    <>
    <div className="box">
      <NavBar
        seccionesNav={seccionesNav}
        esSeccionCliente={false}
        titulo="DETALLES DE VENTA"
      />
    </div>
      <div>
        <DetalleVenta></DetalleVenta>
        </div>
    <Footer></Footer>
 
      
    </>
  );
}
