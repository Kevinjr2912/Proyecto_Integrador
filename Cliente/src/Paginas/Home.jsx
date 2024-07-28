import React from "react";
import NavBar from "../Componentes/NavBar.jsx";
import Servicios from "../Componentes/Servicios.jsx";
import SeccionesTienda from "../Componentes/SeccionesTienda.jsx";
import ImageSlide from "../Componentes/ImagenSlide.jsx";
import Cascos from "../Componentes/PrincipalOverHell/Cascos.jsx";
import Overoles from "../Componentes/PrincipalOverHell/Overoles.jsx";
import ParrillaEquipos from "../Imagenes/ParrillaEquipos.jpg"
import equipos from "../Imagenes/equipos.jpg"
import "../Estilos/Home.css";
import Footer from "../Componentes/Footer.jsx";
import NewCarrusel from "../Componentes/NewCarrusel.jsx";
import AboutUs from "../Componentes/AboutUs.jsx";
import MasSobreMi from "../Componentes/MasSobreMi.jsx";

import WhatsFlotante from "../Componentes/WhatsFlotante.jsx";

export default function Home() {
  const seccionesNav = [
    {
      id: 0,
      nombre: "CONOCENOS",
    },
    {
      id: 1,
      nombre: "OVEROLES",
    },
    {
      id: 2,
      nombre: "CASCOS",
    },
    {
      id: 3,
      nombre: "MIS ORDENES",
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
      <WhatsFlotante />

      <div className="home">
        <NavBar seccionesNav={seccionesNav} esSeccionCliente={true} />
        <div className="contenedor_carro">
          <NewCarrusel slidesPerView={1} spaceBetween={0}>
            <ImageSlide src={equipos} alt="Imagen carro" />
            <ImageSlide src={ParrillaEquipos} alt="Imagen carro" />
          </NewCarrusel>
        </div>
        <Servicios />
        <div className="secciones">
          <SeccionesTienda
            seccionesNav={seccionesNav}
            esSeccionCliente={true}
            className="Hello"
          />
        </div>
        
          <Cascos />
          <Overoles />
       
        

        <NewCarrusel slidesPerView={1} spaceBetween={0}>
          <AboutUs />
          <MasSobreMi />
        </NewCarrusel>
      </div>
      <Footer />
    </>
  );
}