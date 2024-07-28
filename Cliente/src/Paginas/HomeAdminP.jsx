import React from "react";
import NavBar from "../Componentes/NavBar";
import Footer from "../Componentes/Footer";
import HomeAdmin from "../Componentes/HomeAdmin";



export default function HomeAdminP(){

    const seccionesNav = [
        {
            id: 0,
            nombre: 'INICIO',
            
        },
        {
            id: 2,
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

    return(
        <>
    
        <NavBar
            seccionesNav={seccionesNav}
            esSeccionCliente={false}
            titulo="Configuración"
        ></NavBar>

        <HomeAdmin></HomeAdmin>
        
        <Footer></Footer>
         </>

    )

}
