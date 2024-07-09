import React from "react";
import Login from "../Componentes/Login";
import NavBar from "../Componentes/NavBar";


export default function LoginPagina(){
    
    const seccionesNav = [
        {
            id: 0,
            nombre: 'INICIO',
        }

    ];

    return(
        <>
         <NavBar
            seccionesNav={seccionesNav}
            esSeccionCliente={false}
            titulo="Configuración"
        ></NavBar>

        <Login/>
        </>
    );
}