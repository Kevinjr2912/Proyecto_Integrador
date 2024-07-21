import React, { useState } from 'react';
import NavBar from "../Componentes/NavBar";
import ImagenesReferencia from "../Componentes/ImagenesReferencia";
import imagen_home from '../Imagenes/imagen_home.jpg';
import '../Estilos/InformacionProducto.css';
import NombrePrecioProducto from "../Componentes/NombrePrecioProducto";
import AccionesProducto from "../Componentes/AccionesProducto";

export default function InformationProduct({ agregarAlCarrito }) {
    const [cantidad, setCantidad] = useState(1);
    const producto = {
        id: 1,
        nombre: "Lorem ipsum dolor sit amet, consectetudijedienfbuc.",
        precio: "$0.00 MXN",
        img_principal: imagen_home
    };

    const seccionesNav = [
        { id: 0, nombre: "CONOCENOS" },
        { id: 1, nombre: "OVEROLES" },
        { id: 2, nombre: "CASCOS" },
        { id: 3, nombre: "MIS ORDENES" }
    ];

    const manejarAgregarAlCarrito = () => {
        agregarAlCarrito(producto, cantidad);
        console.log(`Agregado ${cantidad} de ${producto.nombre} al carrito`);
    };

    return (
        <>
            <NavBar seccionesNav={seccionesNav} esSeccionCliente={true} />
            <div className="box_container_page">
                <div className="product">
                    <div className="aboutProduct">
                        <ImagenesReferencia
                            img_principal={imagen_home}
                            img1={imagen_home}
                            img2={imagen_home}
                            img3={imagen_home}
                            img4={imagen_home}
                        />
                        <div className="information">
                            <NombrePrecioProducto nombre={producto.nombre} precio={producto.precio} />
                            <AccionesProducto cantidad={cantidad} setCantidad={setCantidad} />
                            <button onClick={manejarAgregarAlCarrito}>Agregar al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
