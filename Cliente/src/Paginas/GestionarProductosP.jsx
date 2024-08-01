import React, { useState, useEffect } from "react";
import ListaProducto from "../Componentes/GestionProductos/ListaProducto";
import NavBar from "../Componentes/NavBar.jsx";
import Footer from "../Componentes/Footer.jsx";
import AddProduct from "../Componentes/GestionProductos/AddProduct";
import '../Estilos/GestionarProductosP.css';

export default function GestionarProductosP() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem('token');
  
  const showData = async () => {
    try {
      const response = await fetch('http://localhost:3000/products/getAllProducts',{
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      
      // Verifica si data es un arreglo antes de usarlo
      if (Array.isArray(data)) {
        setProducts(data);
      } else {
        console.error('La respuesta no es un arreglo:', data);
      }
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  useEffect(() => {
    showData();
  },[]);

  const addProduct = (product) => {
    setProducts(prevProducts => [...prevProducts, product]);
  };

  const seccionesNav = [

    {
        id: 1,
        nombre: 'MENU',
        
    },
    {
        id: 2,
        nombre: 'GESTIÓN PRODUCTO',
    },
    {
        id: 3,
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
