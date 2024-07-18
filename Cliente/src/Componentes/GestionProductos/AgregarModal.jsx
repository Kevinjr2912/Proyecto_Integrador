import React, { useState } from "react";
import "../../Estilos/AgregarModal.css";

export default function AgregarModal({ isOpen, onClose, onAddProduct }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Overol");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [equipment, setEquipment] = useState("");
  const [images, setImages] = useState([]);

  

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);

    if (files.length + images.length > 3) {
      alert("Has alcanzado el máximo de imágenes permitidas (3)");
      return;
    }

    setImages((prevImages) => [...prevImages, ...files]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("nombre", name);
    data.append("precio", price);
    data.append("descripcion", description);
    data.append("equipo", equipment);
    data.append("nombreCategoria", category);
    images.forEach((image) => {
      data.append("dato_imagen", image);
    });

    try {
      const response = await fetch("http://localhost:3000/products/addProduct/", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      onAddProduct({
        nombre: name,
        categoria: category,
        precio: price,
        descripcion: description,
        equipo: equipment,
        images: images.map(image => URL.createObjectURL(image)),
      });

      setName('');
      setCategory('Overol');
      setPrice('');
      setDescription('');
      setEquipment('');
      setImages([]);
      
      alert("Producto agregado exitosamente");

    } catch (error) {
      alert(`Error al agregar producto: ${error.message}`);
    }

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="agregar-modal-overlay">
      <div className="agregar-modal-content">
        <form className="agregar-box-sonAdd" onSubmit={handleSubmit} encType="multipart/form-data">
          <label htmlFor="name">Nombre</label>
          <input
            name="nombre"
            type="text"
            placeholder="Nombre"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h4>Categoría</h4>
          <select
            name="categoria"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Selecionar categoría</option>
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

          <select name="" id="">
            <option value="">Seleccionar equipo</option>
            {listeEquipment.map((eq) => (
            <option value={e.id}>
              {eq.name}
            </option>
          ))}
          </select>
          <label htmlFor="equipo">Equipo</label>
          <input
            name="equipo"
            type="text"
            id="equipo"
            placeholder="Equipo"
            value={equipment}
            onChange={(e) => setEquipment(e.target.value)}
          />
          <div className="file-input-container">
            <input
              name="dato_imagen"
              type="file"
              id="file-input"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
            />
            <label htmlFor="file-input" className="file-input-label">
              <span className="plus-icon">+</span>
              <span className="text">Agregar imagen</span>
            </label>
          </div>

          <div id="image-preview-container">
            {images.map((image, index) => (
              <img
                key={index}
                src={URL.createObjectURL(image)}
                alt={`preview ${index}`}
                className="image-preview"
              />
            ))}
          </div>

          <div className="agregar-actionsProduct">
            <button type="button" className="agregar-btn_cancelar" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="agregar-btn_addP">
              Agregar producto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
