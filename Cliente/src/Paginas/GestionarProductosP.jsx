import React, { useState } from "react";
import ListaProducto from "../Componentes/GestionProductos/ListaProducto";
import NavBar from "../../../src/Componentes/NavBar.jsx";
import Footer from "../../../src/Componentes/Footer.jsx";
import AddProduct from "../Componentes/GestionProductos/AddProduct";
import '../Estilos/GestionarProductosP.css';

export default function GestionarProductosP() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState([
    {
      nombre: "Ferrari",
      categoria: "Casco",
      precio: 23,
      descuento: 12,
      descripcion: "me guta",
    },
    {
      nombre: "Red Bull",
      categoria: "Overol",
      precio: 32,
      descuento: 11,
      descripcion: "me jejej",
    },
    {
      nombre: "Red Bull",
      categoria: "Overol",
      precio: 32,
      descuento: 11,
      descripcion: "me jejej",
    },
  ]);

  const addProduct = (product) => {
    setProducts(prevProducts => [...prevProducts, product]);
  };

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

  return (
    <div className="box-product">
      <NavBar
        seccionesNav={seccionesNav}
        esSeccionCliente={false}
        titulo="PRODUCTOS"
      />
      <div className="box-container-actions">
        <button
          className="btn-agregarP"
          onClick={() => setIsModalOpen(true)}
        >
          <span className="styleS">+</span> AGREGAR PRODUCTO
        </button>
      </div>
      <div className="container-main">
          <ListaProducto products={products} />
      </div>
      <div className="box-footer">
        <Footer />
      </div>

      {isModalOpen && (
        <AddProduct onAddProduct={addProduct} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}
