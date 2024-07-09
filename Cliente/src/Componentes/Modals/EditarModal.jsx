import React, { useState, useEffect } from "react";
import "../../Estilos/EditarModal.css";

export default function EditarModal({ isOpen, onClose, onEditProduct, product }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Overol");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [equipment, setEquipment] = useState("");

  useEffect(() => {
    if (product) {
      setName(product.nombre);
      setCategory(product.categoria);
      setPrice(product.precio);
      setDescription(product.descripcion);
      setEquipment(product.equipo || "");
    }
  }, [product]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const editedProduct = {
      ...product,
      nombre: name,
      categoria: category,
      precio: price,
      descripcion: description,
      equipo: equipment,
    };
    onEditProduct(editedProduct);
    onClose();
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
          <label htmlFor="name">Nombre</label>
          <input
            name="nombre"
            type="text"
            placeholder="Nombre"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Categoría</label>
          <select
            name="categoria"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Overol">Overol</option>
            <option value="Casco">Casco</option>
          </select>
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
