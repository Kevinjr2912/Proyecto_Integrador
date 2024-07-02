<<<<<<< HEAD
import React from "react";
import NavBar from "../Componentes/NavBar/NavBar";
import ImagenesReferencia from "../Componentes/ImagenesReferencia/ImagenesReferencia";
import imagen_home from '../Imagenes/imagen_home.jpg';
import '../Estilos/InformationProduct.css';
import NombrePrecioProducto from "../Componentes/NombrePrecioProducto/NombrePrecioProducto";
import AccionesProducto from "../Componentes/AccionesProducto/AccionesProducto";

export default function InformationProduct(){
    return(
        <div className="box_container_page">
            <NavBar/>
            <div className="product">
                <div className="aboutProduct">
                    <ImagenesReferencia
                        img_principal={imagen_home}
                        img1 = {imagen_home}
                        img2 = {imagen_home}
                        img3 = {imagen_home}
                        img4 = {imagen_home}
                    />

                    <div className="information">
                        <NombrePrecioProducto
                            nombre="Lorem ipsum dolor sit amet, consectetudijedienfbuc."
                            precio="$0.00 MXN"
                        />
                        <AccionesProducto/>
                    </div>
                </div>
            </div>
           
        </div>
        
=======
import NavBar from "../Componentes/NavBar/NavBar";

export default function InformationProduct(){
    return(
        <div className="box-container">
            <NavBar/>
        </div>
>>>>>>> main
    );
}