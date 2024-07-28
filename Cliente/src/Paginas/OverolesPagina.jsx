import React, { useState,useEffect } from "react";
import NavBar from "../Componentes/NavBar";
import Filtros from "../Componentes/Filtros";
import Footer from "../Componentes/Footer.jsx";
import CardProducto from "../Componentes/CardProducto.jsx";
import styles from "../Estilos/CascosPagina.module.css";
import WhatsFlotante from "../Componentes/WhatsFlotante.jsx";

export default function OverolesPagina() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const cargarProductos = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/products/getAllOveralls"
      );
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data)) {
          setProducts(data);
          setFilteredProducts(data);
          console.log(data);
        } else {
          console.error("La respuesta no es un array:", data);
          setProducts([]);
          setFilteredProducts([]);
        }
      } else {
        console.error("Error al obtener los productos");
        setProducts([]);
        setFilteredProducts([]);
      }
    } catch (err) {
      console.log(err);
      setProducts([]);
      setFilteredProducts([]);
    }
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  const handleFilterChange = (selectedTeams) => {
    if (selectedTeams.length === 0) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        selectedTeams.includes(product.nombreEquipo)
      );
      setFilteredProducts(filtered);
    }
  };

  const seccionesNav = [
    { id: 0, nombre: "CONOCENOS" },
    { id: 1, nombre: "OVEROLES" },
    { id: 2, nombre: "CASCOS" },
    { id: 3, nombre: "MIS ORDENES" },
  ];

  return (
    <>
    <WhatsFlotante></WhatsFlotante>
      <div className={styles.paginacontainer}>
        <NavBar seccionesNav={seccionesNav} esSeccionCliente={true} />
        <div className={styles.container}>
          <h1 className={styles.titulo}>OVEROLES</h1>
          <Filtros onFilterChange={handleFilterChange} />
        </div>

        <div className={styles.carrusel}>
          {Array.isArray(filteredProducts) && filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <CardProducto
                key={product.idProducto}
                id={product.idProducto}
                src={`http://localhost:3000/uploads/${product.filename}`}
                alt={product.nombre}
                nombre={product.nombre}
                precio={product.precio}
              />
            ))
          ) : (
            <p>No hay productos disponibles.</p>
          )}
        </div>

        <div className={styles.containerFooter}>
          <Footer />
        </div>
      </div>
    </>
  );
}
