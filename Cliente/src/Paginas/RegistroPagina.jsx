import React from "react";
import Registro from "../Componentes/Registro";
import NavBar from "../Componentes/NavBar";


export default function RegistroPagina() {

    const seccionesNav = [
        
        {
            id:0,
            nombre: 'INICIO',
        },
        {
            id: 1,
            nombre: 'OVEROLES',
        },
        {
            id: 2,
            nombre: 'CASCOS',
        },
        {
            id:3,
            nombre: 'OFERTAS',
        }
    ];

    return(
        <>
        <NavBar
            seccionesNav={seccionesNav}
            esSeccionCliente={true}
            titulo="Configuracion"
        ></NavBar>
        <Registro/>
        </>
    );

}