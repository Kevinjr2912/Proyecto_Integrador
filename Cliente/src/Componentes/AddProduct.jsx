import React, { useState } from "react";
import "../Estilos/AddProduct.css";
import Swal from "sweetalert2";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Overol");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [equipment, setEquipment] = useState("");
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);

    if (files.length + images.length > 5) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Has alcanzado el máximo de imágenes permitidas (5)',
      });
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

    console.log(data)

    try {
      const response = await fetch("http://localhost:3000/products/addProduct/", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      Swal.fire({
        icon: "success",
        title: 'Producto agregado exitosamente',
        showConfirmButton: false,
        timer: 1500,
      });
      
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Error al agregar producto: ${error.message}`,
      });
    }
  };

  return (
    <div className="box-addInformationProduct">
      <form
        className="box-sonAdd"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <label htmlFor="name">Nombre</label>
        <input
          name="nombre"
          type="text"
          placeholder="Name"
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
        <div className="actionsProduct">
          <button type="button" className="btn_cancelar">
            Cancelar
          </button>
          <button type="submit" className="btn_addP">
            Agregar producto
          </button>
        </div>
      </form>
    </div>
  );
}