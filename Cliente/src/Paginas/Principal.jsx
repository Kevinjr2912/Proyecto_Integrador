import React, { useContext } from "react";
import NavBar from "../Componentes/NavBar.jsx";
import Servicios from "../Componentes/Servicios.jsx";
import SeccionesTienda from "../Componentes/SeccionesTienda.jsx";
import ImageSlide from "../Componentes/ImagenSlide.jsx";
import Cascos from "../Componentes/PrincipalOverHell/Cascos.jsx";
import Overoles from "../Componentes/PrincipalOverHell/Overoles.jsx";
import ParrillaEquipos from "../Imagenes/ParrillaEquipos.jpg"
import imgSlider from "../Imagenes/imgSlider.jpg"
import imgSlider4Ferrari from "../Imagenes/imgSlider4Ferrari.jpg"
import equipos from "../Imagenes/equipos.jpg"
import NewCarrusel from "../Componentes/NewCarrusel.jsx";
import AboutUs from "../Componentes/AboutUs.jsx";
import MasSobreMi from "../Componentes/MasSobreMi.jsx";
import "../Estilos/Home.css";
import Footer from "../Componentes/Footer.jsx";
import WhatsFlotante from "../Componentes/WhatsFlotante.jsx";
export default function Home({ isLoggedIn, isAdmin, handleLogout}) {
  
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
    <WhatsFlotante></WhatsFlotante>

      <div className="home">
        <NavBar 
                seccionesNav={seccionesNav}
                esSeccionCliente={!isAdmin}
                isLoggedIn={isLoggedIn}
                handleLogout={handleLogout}
        />
        <div className="contenedor_carro">
          <NewCarrusel slidesPerView={1} spaceBetween={0}>
            <ImageSlide src={imgSlider} alt="Imagen carro" />
            <ImageSlide src={equipos} alt="Imagen carro" />
            <ImageSlide src={ParrillaEquipos} alt="Imagen carro" />
            <ImageSlide src={imgSlider4Ferrari} alt="Imagen carro" />
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
      <Footer></Footer>
    </>
  );
}
