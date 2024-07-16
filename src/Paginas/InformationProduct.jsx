import React from "react";
import NavBar from "../Componentes/NavBar";
import ImagenesReferencia from "../Componentes/ImagenesReferencia";
import imagen_home from '../Imagenes/imagen_home.jpg';
import '../Estilos/InformationProduct.css';
import NombrePrecioProducto from "../Componentes/NombrePrecioProducto";
import AccionesProducto from "../Componentes/AccionesProducto";

export default function InformationProduct(){
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
        <div className="box_container_page">
           <NavBar
                seccionesNav={seccionesNav}
                esSeccionCliente={true}
                titulo = "PRODUCTOS"
            />
            
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
    );
}