import React, { useState, useEffect } from "react";
import "../../Estilos/EditarModal.css";
import Swal from 'sweetalert2';

export default function EditarModal({ isOpen, onClose, onEditProduct, product }) {
  const [originalName, setOriginalName] = useState(""); // Almacenar el nombre original
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [equipment, setEquipment] = useState("");

  useEffect(() => {
    if (product) {
      setOriginalName(product.nombre || ""); // Establecer el nombre original
      setName(product.nombre || "");
      setPrice(product.precio || "");
      setDescription(product.descripcion || "");
      setEquipment(product.equipo || "");
    } else {
      setOriginalName("");
      setName("");
      setPrice("");
      setDescription("");
      setEquipment("");
    }
  }, [product]);

  const fetchProductId = async (nombre) => {
    console.log("Fetching product ID for:", nombre); // Log para depurar
    try {
      const response = await fetch(`http://localhost:3000/products/searchProduct/${nombre}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

      Swal.fire({
        icon: "success",
        title: `Id encontrado ${data.idProductos}`,
        showConfirmButton: false,
        timer: 1500,
      });

      return data.idProductos;

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Error: ${error.message}`,
      });
      return null;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const productId = await fetchProductId(originalName);
    
    if (!productId) {
      console.error('No se pudo obtener el ID del producto');
      return;
    }

    const editedProduct = {
      nombre: name,
      precio: price,
      descripcion: description,
      equipo: equipment,
    };

    try {
      const response = await fetch(`http://localhost:3000/products/updateProduct/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedProduct),
      });

      if (response.ok) {
        const updatedProduct = await response.json();
        console.log("Updated product:", updatedProduct); // Log para depurar
        onEditProduct(updatedProduct);
        onClose();
      } else {
        console.error('Error al actualizar el producto');
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="editar-modal-overlay">
      <div className="editar-modal-content">
        <form
          className="editar-box-sonAdd"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <h2>Editando producto: {product?.nombre || "Nuevo Producto"}</h2>
          <label htmlFor="name">Nombre</label>
          <input
            name="nombre"
            type="text"
            placeholder="Nombre"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="precio">Precio</label>
          <input
            name="precio"
            type="text"
            placeholder="Precio"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label className="labelInfo" htmlFor="descripcion">
            Descripción
          </label>
          <input
            name="descripcion"
            type="text"
            placeholder="Descripción"
            id="descripcion"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label htmlFor="equipo">Equipo</label>
          <input
            name="equipo"
            type="text"
            id="equipo"
            placeholder="Equipo"
            value={equipment}
            onChange={(e) => setEquipment(e.target.value)}
          />
          <div className="editar-actionsProduct">
            <button type="button" className="editar-btn_cancelar" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="editar-btn_addP">
              Guardar cambios
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
