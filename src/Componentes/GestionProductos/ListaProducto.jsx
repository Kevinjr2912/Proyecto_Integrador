import React, { useState } from "react";
import AddProduct from "../GestionProductos/AddProduct";
import TablaProducto from "../GestionProductos/TablaProducto";
import "../../Estilos/ListaProducto.css"

const ProductList = () => {
  const [products, setProducts] = useState([
    {
      nombre: "Ferrari",
      categoria: "Casco",
      precio: 23,
      descuento: 12,
      descripcion: "me guta",
    },
    {
      nombre: "Red Bull",
      categoria: "Overol",
      precio: 32,
      descuento: 11,
      descripcion: "me jejej",
    },
    {
      nombre: "Red Bull",
      categoria: "Overol",
      precio: 32,
      descuento: 11,
      descripcion: "me jejej",
    },
  ]);

  const addProduct = (product) => {
    setProducts(prevProducts => [...prevProducts, product]);
  };

  return (
    <>
    
    <AddProduct onAddProduct={addProduct} />
    <div className="container-main">
    <div className="tabla" >
      <TablaProducto className="owo" products={products} />
    </div>
    </div>

    </>
  );
};

export default ProductList;
