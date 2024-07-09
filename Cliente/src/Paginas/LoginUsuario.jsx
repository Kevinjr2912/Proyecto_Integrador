import React from "react";
import Login from "../Componentes/Login";
import NavBar from "../Componentes/NavBar";


export default function LoginPagina(){
    
    const seccionesNav = [
        {
            id: 0,
            nombre: 'OVEROLES',
        },
        {
            id: 1,
            nombre: 'CASCOS',
        },
        {
            id:2,
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

        <Login/>
        </>
    );
}