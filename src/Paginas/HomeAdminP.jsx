import React from "react";
import '../Estilos/HomeAdmin.css'
import NavBar from "../Componentes/NavBar/NavBar";
import Footer from "../Componentes/Footer/Footer";
import HomeAdmin from "../Componentes/HomeAdmin/HomeAdmin";
import DetalleStatus from "../Componentes/DetalleStatus/DetalleStatus";


export default function HomeAdminP(){

    return(


        <>
    
        <NavBar></NavBar>
        
        <DetalleStatus></DetalleStatus>
        
        <Footer></Footer>
         </>

    )

}
