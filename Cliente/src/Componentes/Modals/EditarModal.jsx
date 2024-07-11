import React, { useState, useEffect } from "react";
import "../../Estilos/EditarModal.css";
import Swal from 'sweetalert2';

export default function EditarModal({ isOpen, onClose, onEditProduct, product }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [equipment, setEquipment] = useState("");

  useEffect(() => {
    if (product) {
      setName(product.nombre || "");
      setPrice(product.precio || "");
      setDescription(product.descripcion || "");
      setEquipment(product.equipo || "");
    } else {
      setName("");
      setPrice("");
      setDescription("");
      setEquipment("");
    }
  }, [product]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Producto rebido a editar: " + product.idProductos)
    const idProducto = product.idProductos;
    
  const data = {
    nombre: name,
    precio: price,
    descripcion: description,
    equipo: equipment
  };

    try {
      const response = await fetch(`http://localhost:3000/products/updateProduct/${idProducto}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),}
      );

      if (response.ok) {
        const updatedProduct = await response.json();
        Swal.fire({
          icon: "success",
          title: 'Producto agregado exitosamente',
          showConfirmButton: false,
          timer: 1500,
        }); 
        onEditProduct(updatedProduct);
        onClose();
      } else {
        Swal.fire({
          icon: "errorr",
          title: "Oops...",
          text: "Error al actualizar el producto",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "errorr",
        title: "Oops...",
        text: `Error al eviar la solicitud`,
      });
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
