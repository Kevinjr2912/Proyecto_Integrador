import React from "react";
import NavBar from "../Componentes/NavBar";
import Footer from "../Componentes/Footer";
import HomeAdmin from "../Componentes/HomeAdmin";



export default function HomeAdminP(){

    const seccionesNav = [

        {
            id: 1,
            nombre: 'GESTIÓN PRODUCTO',
        },
        {
            id: 2,
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
