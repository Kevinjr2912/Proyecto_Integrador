import React, { useState } from "react";
import "../../Estilos/AddProduct.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function AddProduct({ onAddProduct, onClose }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Overol");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [equipment, setEquipment] = useState("");
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  const listeEquipment = [
    { idEquipment: 1, name: "Alpine" },
    { idEquipment: 2, name: "Kick Sauber" },
    { idEquipment: 3, name: "Mercedes" },
    { idEquipment: 4, name: "Aryrton Senna" },
    { idEquipment: 5, name: "RedBull" },
    { idEquipment: 6, name: "Ferrari" },
    { idEquipment: 7, name: "MacLaren" },
    { idEquipment: 8, name: "Aston Martin" },
  ];

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
    if (
      !name ||
      !category ||
      !price ||
      !description ||
      !equipment
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No pueden quedar campos vacíos",
      });
    } else if (images.length < 3) {
      Swal.fire({
        icon: "error",
        title: "Cantidad de imágenes",
        text: "El sistema admite 3 imágenes",
      });
    } else {
      const data = new FormData();
      data.append("nombre", name);
      data.append("precio", price);
      data.append("descripcion", description);
      data.append("id_equipo", parseInt(equipment));
      data.append("id_categoria", parseInt(category));
      images.forEach((image) => {
        data.append("imagen", image);
      });

      try {
        const token = localStorage.getItem('jwtToken');
        const response = await fetch("http://localhost:3000/products/addProduct/", {
          method: "POST",
          body: data,
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.status === 401) {
          // Token expirado o no autorizado
          Swal.fire({
            icon: "error",
            title: "Sesión expirada",
            text: "Tu sesión ha expirado. Por favor, inicia sesión nuevamente.",
          }).then(() => {
            localStorage.removeItem('jwtToken');
            navigate('/loginAdmin');
          });
          return;
        }

        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }

        const nameCategory = category === "1" ? "Casco" : "Overol";

        onAddProduct({
          nombre: name,
          categoria: nameCategory,
          precio: price,
          descripcion: description,
          equipo: equipment,
          images: images.map((image) => URL.createObjectURL(image)),
        });

        setName("");
        setCategory("Overol");
        setPrice("");
        setDescription("");
        setEquipment("");
        setImages([]);

        Swal.fire({
          icon: "success",
          title: "Producto agregado exitosamente",
          showConfirmButton: false,
          timer: 1500,
        });

        onClose();
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Error al enviar la solicitud: ${error.message}`,
        });
      }
    }
  };

  return (
    <div className="agregar-modal-overlay">
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
            <option value="">Seleccionar categoría</option>
            <option value="1">Casco</option>
            <option value="2">Overol</option>
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
          <label className="labelInfo" htmlFor="description">
            Descripción
          </label>
          <input
            name="description"
            type="text"
            placeholder="Descripción"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <select
            name="listEquiptments"
            id="lEquipment"
            onChange={(e) => setEquipment(e.target.value)}
          >
            <option value="">Seleccionar equipo</option>
            {listeEquipment.map((eq) => (
              <option key={eq.idEquipment} value={eq.idEquipment}>
                {eq.name}
              </option>
            ))}
          </select>
          <div className="file-input-container">
            <input
              name="imagen"
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
            <button type="button" className="btn_cancelar" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="btn_addP">
              Agregar producto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
