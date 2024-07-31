import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ListaProducto from "../Componentes/GestionProductos/ListaProducto";
import NavBar from "../Componentes/NavBar.jsx";
import Footer from "../Componentes/Footer.jsx";
import AddProduct from "../Componentes/GestionProductos/AddProduct";
import '../Estilos/GestionarProductosP.css';

export default function GestionarProductosP() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // Hook para redirección

  useEffect(() => {
    const token = localStorage.getItem('jwtToken'); // Obtén el token JWT

    if (!token) {
      navigate('/loginAdmin'); // Redirige si no hay token
      return;
    }

    const showData = async () => {
      try {
        const response = await fetch('http://localhost:3000/products/getAllProducts', {
          headers: {
            'Authorization': `Bearer ${token}` // Incluye el token en los headers
          }
        });
        const data = await response.json();

        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error('La respuesta no es un arreglo:', data);
        }
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    showData();
  }, [navigate]);

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
