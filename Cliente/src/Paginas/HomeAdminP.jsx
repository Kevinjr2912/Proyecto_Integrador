import React from "react";
import '../Estilos/HomeAdmin.css'
import NavBar from "../Componentes/NavBar";
import Footer from "../Componentes/Footer";
import HomeAdmin from "../Componentes/HomeAdmin";
import DetalleStatus from "../Componentes/DetalleStatus";


export default function HomeAdminP(){

    return(
        <>
    
        <NavBar></NavBar>
        
        <DetalleStatus></DetalleStatus>
        
        <Footer></Footer>
         </>

    )

}
