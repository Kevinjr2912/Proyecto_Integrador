import React from "react";
import NavBar from "../Componentes/NavBar.jsx";
import Servicios from "../Componentes/Servicios.jsx";
import SeccionesTienda from "../Componentes/SeccionesTienda.jsx";
import CarruselProducto from "../Componentes/CarruselProducto.jsx";
import imagen_home from "../Imagenes/imagen_home.jpg";
import "../Estilos/Home.css";
import Footer from "../Componentes/Footer.jsx";
import "../Estilos/Whats.css";
export default function Home() {
  const seccionesNav = [
    {
      id: 0,
      nombre: "ABOUT US",
    },
    {
      id: 1,
      nombre: "OVERALLS",
    },
    {
      id: 2,
      nombre: "HELMETS",
    },
    {
      id: 3,
      nombre: "OFFERS",
    },
    {
      id: 4,
      nombre: "REVIEWS",
    },
  ];

  return (
    <>
    {/*rollo del whats flotante */}
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
      />
      <a
        href="https://api.whatsapp.com/send?phone=1234567891&text=Hola, me gustaria Obtener más información"
        class="float"
        target="_blank"
      >
        <i class="fa fa-whatsapp my-float "></i>
      </a>
       {/*rollo del whats flotante */}

      <div className="home">
        <NavBar seccionesNav={seccionesNav} esSeccionCliente={true} />
        <div className="contenedor_carro">
          <img className="img_home" src={imagen_home} alt="Imagen carro" />
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
