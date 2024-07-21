import React, { useState, useEffect } from "react";
import NavBar from "../Componentes/NavBar";
import Filtros from "../Componentes/Filtros";
import Footer from "../Componentes/Footer.jsx";
<<<<<<< HEAD
import "../Estilos/CascosPagina.css";
import CardProducto from "../Componentes/CardProducto.jsx";

export default function CascosPagina() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const cargarProductos = async () => {
    try {
      const response = await fetch('http://localhost:3000/products/getHelmets');

      if (response.ok) {
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  const handleFilterChange = (selectedTeams) => {
    if (selectedTeams.length === 0) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => selectedTeams.includes(product.nombreEquipo));
      setFilteredProducts(filtered);
    }
  };

  const seccionesNav = [
    { id: 0, nombre: 'SOBRE NOSOTROS' },
    { id: 1, nombre: 'OVEROLES' },
    { id: 2, nombre: 'CASCOS' }
  ];

  return (
    <>
      <NavBar
        seccionesNav={seccionesNav}
        esSeccionCliente={true}
      />
      <div className="container">
        <h1 className="titulo">CASCOS</h1>
        <Filtros onFilterChange={handleFilterChange} />
      </div>

      <div className="carrusel">
        {filteredProducts.map((product) => (
          <CardProducto
            key={product.idProducto}
            src={`data:image/jpeg;base64,${product.imagen}`}
            alt={product.nombre}
            nombre={product.nombre}
            precio={product.precio}
          />
        ))}
      </div>
      <Footer />
=======
import styles from "../Estilos/CascosPagina.module.css";

export default function CascosPagina() {
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
     <div className={styles.paginacontainer}>
      <NavBar seccionesNav={seccionesNav} esSeccionCliente={true} />
      <div className={styles.container}>
        <h1 className={styles.titulo}>CASCOS</h1>
        <Filtros></Filtros>
      </div>

      <div className={styles.carruselContainer}>
        <CarruselProducto className={styles.carrusel} />
        <CarruselProducto className={styles.carrusel} />
      </div>

      <Footer></Footer>
      </div>
>>>>>>> ab265804fdb9b7ff0095a95fd6760f23a2381cad
    </>
  );
}
