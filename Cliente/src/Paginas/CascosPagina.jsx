import React, { useState,useEffect } from "react";
import NavBar from "../Componentes/NavBar";
import Filtros from "../Componentes/Filtros";
import Footer from "../Componentes/Footer.jsx";
import "../Estilos/CascosPagina.css";
import CardProducto from "../Componentes/CardProducto.jsx";

export default function CascosPagina() {
  const [products, setProducts] = useState([]);
  
  const cargarProductos = async () => {
    try{
      const response = await fetch('http://localhost:3000/products/getHelmets');

      if(response.ok){
        const data = await response.json();
        setProducts(data)
        console.log(data)
      }

    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    cargarProductos();
  },[]);
  
  const seccionesNav = [
    {
        id: 0,
        nombre: 'SOBRE NOSOTROS',
    },
    {
        id: 1,
        nombre: 'OVEROLES',
    },
    {
        id: 2,
        nombre: 'CASCOS',
    }
  ];

  return (
    <>
      <NavBar
        seccionesNav={seccionesNav}
        esSeccionCliente={true}
      ></NavBar>
      <div className="container">
        <h1 className="titulo">CASCOS</h1>
        <Filtros></Filtros>
      </div>

      <div className="carrusel">
        {products.map((product) => (
          <CardProducto
            key={product.idProductos}
            src={`data:image/jpeg;base64,${product.imagen}`}
            alt={product.nombre}
            nombre={product.nombre}
            precio={product.precio}
          >
          </CardProducto>
        ))}
      </div>
      <Footer></Footer>
    </>
  );
}
