import React from 'react';
import NavBar from '../Componentes/NavBar.jsx';
import Servicios from '../Componentes/Servicios.jsx';
import SeccionesTienda from '../Componentes/SeccionesTienda.jsx';
import CarruselProducto from '../Componentes/CarruselProducto.jsx';
import imagen_home from '../Imagenes/imagen_home.jpg';
import '../Estilos/Home.css';
import Footer from '../Componentes/Footer.jsx';

export default function Home() {
    const seccionesNav = [
        {
            id: 0,
            nombre: 'ABOUT US',
        },
        {
            id: 1,
            nombre: 'OVERALLS',
        },
        {
            id: 2,
            nombre: 'HELMETS',
        },
        {
            id: 3,
            nombre: 'OFFERS',
        },
        {
            id: 4,
            nombre: 'REVIEWS',
        }
    ];

    return (

        <>
        <div className="home">
            <NavBar 
                seccionesNav={seccionesNav}
                esSeccionCliente={true}
            />
            <div className='contenedor_carro'>
                <img className='img_home' src={imagen_home} alt="Imagen carro" />
            </div>
            <Servicios />
            <div className="secciones">
                <SeccionesTienda 
                    seccionesNav={seccionesNav}
                    esSeccionCliente={true}
                    className="Hello"
                />
            </div>
            <CarruselProducto />
            <CarruselProducto />
        </div>
        <Footer></Footer>
        </>

    );
}
