import "../Estilos/AddProduct.css";
import { useState } from "react";

export default function AddProduct({ onAddProduct }) {
  const [images, setImages] = useState([]);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Overol');
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [description, setDescription] = useState('');

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const imagePreviews = files.map((file) => URL.createObjectURL(file));

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { nombre: name, categoria: category, precio: price, descuento: discount, descripcion: description, images };
    onAddProduct(newProduct);
    setName('');
    setCategory('Overol');
    setPrice('');
    setDiscount('');
    setDescription('');
    setImages([]);
  };

  return (
    <div className="box-addInformationProduct">
      <form className="box-sonAdd" method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input type="text" placeholder="Name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        <h4>Categoría</h4>
        <select name="category" id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Overol">Overol</option>
          <option value="Casco">Casco</option>
        </select>
        <label htmlFor="precio">Precio</label>
        <input type="text" placeholder="Precio" id="precio" value={price} onChange={(e) => setPrice(e.target.value)} />
        <label htmlFor="descuento">Descuento</label>
        <input type="text" placeholder="Descuento" id="descuento" value={discount} onChange={(e) => setDiscount(e.target.value)} />
        <label className="labelInfo" htmlFor="descripcion">Descripción</label>
        <input type="text" placeholder="Descripción" id="descripcion" value={description} onChange={(e) => setDescription(e.target.value)} />
        <div className="file-input-container">
          <input type="file" id="file-input" accept="image/*" multiple onChange={handleImageUpload} />
          <label htmlFor="file-input" className="file-input-label">
            <span className="plus-icon">+</span>
            <span className="text">add img</span>
          </label>
        </div>
        <div id="image-preview-container">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`preview ${index}`} className="image-preview" />
          ))}
        </div>
        <div className="actionsProduct">
          <button type="button" className="btn_cancelar" onClick={() => {
            setName('');
            setCategory('Overol');
            setPrice('');
            setDiscount('');
            setDescription('');
            setImages([]);
          }}>Cancelar</button>
          <button type="submit" className="btn_addP">Agregar producto</button>
        </div>
      </form>
    </div>
  );
}
