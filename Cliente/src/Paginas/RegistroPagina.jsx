import React from "react";
import Registro from "../Componentes/Registro";
import NavBar from "../Componentes/NavBar";
import WhatsFlotante from "../Componentes/WhatsFlotante";
import Footer from "../Componentes/Footer";

export default function RegistroPagina() {

    
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

    return(
        <>
        <WhatsFlotante></WhatsFlotante>
         <NavBar
            seccionesNav={seccionesNav}
            esSeccionCliente={true}
        ></NavBar>
        <Registro/>
        <Footer></Footer>
        </>
    );

}