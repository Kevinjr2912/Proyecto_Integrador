import "../../Estilos/AddProduct.css";
import { useState } from "react";

export default function AddProduct() {
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const imagePreviews = files.map((file) => URL.createObjectURL(file));
    // Limitar a 5 imágenes en total
    setImages((prevImages) => {
      const totalImages = prevImages.length + imagePreviews.length;
      if (totalImages > 5) {
        alert("Has alcanzado el límite de 5 imágenes.");
        return prevImages.length < 5
          ? [...prevImages, ...imagePreviews.slice(0, 5 - prevImages.length)]
          : prevImages;
      }
      return [...prevImages, ...imagePreviews];
    });
  };

  return (
    <div className="box-addInformationProduct">
      <form className="box-sonAdd" method="post" encType="multipart/form-data">
        <label htmlFor="name">Nombre</label>
        <input type="text" placeholder="Name" id="name" />
        <h4>Categoría</h4>
        <select name="category" id="category">
          <option value="Overol">Overol</option>
          <option value="Casco">Casco</option>
        </select>
        <label htmlFor="precio">Precio</label>
        <input type="text" placeholder="Precio" id="precio" />
        <label htmlFor="descuento">Descuento</label>
        <input type="text" placeholder="Descuento" id="descuento" />
        <label className="labelInfo" htmlFor="descripcion">
          Descripción
        </label>
        <input type="text" placeholder="Descripción" id="descripcion" />
        <div className="file-input-container">
          <input
            type="file"
            id="file-input"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
          />
          <label htmlFor="file-input" className="file-input-label">
            <span className="plus-icon">+</span>
            <span className="text">add img</span>
          </label>
        </div>

        <div id="image-preview-container">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`preview ${index}`}
              className="image-preview"
            />
          ))}
        </div>
        <div className="actionsProduct">
          <button className="btn_cancelar">Cancelar</button>
          <button className="btn_addP">Agregar producto</button>
        </div>
      </form>
    </div>
  );
}
