import React, { useState } from "react";
import ListaProducto from "../Componentes/GestionProductos/ListaProducto";
import NavBar from "../Componentes/NavBar/NavBar.jsx";
import Footer from "../Componentes/Footer/Footer.jsx";
import AddProduct from "../Componentes/GestionProductos/AddProduct"; // Asegúrate de importar AddProduct
import Modal from "../Componentes/Modal"; // Importa el nuevo componente Modal
import '../Estilos/GestionarProductosP.css';

export default function GestionarProductos() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar el modal

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

  const handleAddProduct = (product) => {
    // Lógica para manejar el producto agregado
    console.log(product);
  };

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
          onClick={() => setIsModalOpen(true)} // Abre el modal al hacer clic en el botón
        >
          <span className="styleS">+</span> AGREGAR PRODUCTO
        </button>
      </div>
      <div className="main">
        <ListaProducto />
      </div>
      <div className="box-footer">
        <Footer />
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AddProduct onAddProduct={handleAddProduct} />
      </Modal>
    </div>
  );
}
