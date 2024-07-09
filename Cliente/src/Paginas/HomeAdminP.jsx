import React from "react";
import '../Estilos/HomeAdmin.css'
import NavBar from "../Componentes/NavBar";
import Footer from "../Componentes/Footer";
import HomeAdmin from "../Componentes/HomeAdmin";
import DetalleStatus from "../Componentes/DetalleStatus";


export default function HomeAdminP(){

    const seccionesNav = [
        {
            id: 0,
            nombre: 'GESTIÓN PRODUCTO',
        },
        {
            id: 1,
            nombre: 'DETALLES DE VENTA',
        }
    ];

    return(
        <>
    
        <NavBar
            seccionesNav={seccionesNav}
            esSeccionCliente={false}
            titulo="Configuracion"
        ></NavBar>

        <HomeAdmin></HomeAdmin>
        
        <Footer></Footer>
         </>

    )

}
