import React, { useState } from "react";
import AddProduct from "./AddProduct";
import TablaProducto from "./TablaProducto";

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
    <div>
      <AddProduct onAddProduct={addProduct} />
      <TablaProducto products={products} />
    </div>
  );
};

export default ProductList;
