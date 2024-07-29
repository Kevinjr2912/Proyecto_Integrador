import React, { useEffect, useState } from "react";
import CardProducto from "../CardProducto";

export default function Overoles() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch("http://localhost:3000/products/getOchoOveroles")
        .then((response) => response.json())
        .then((data) => {
          if (Array.isArray(data)) {
            setProducts(data);
          } else {
            setError("Error: El servidor no devolvió un array.");
          }
        })
        .catch((error) => setError("Error fetching overalls: " + error.message));
    }, []);
  
    if (error) {
      return <div>{error}</div>;
    }
  
    return (
      <div className="product-list">
        {products.map((product) => (
          <CardProducto
            key={product.idProducto}
            id={product.idProducto}
            src={`data:image/jpeg;base64,${product.imagen}`}
            alt={product.nombre}
            nombre={product.nombre}
            precio={product.precio}
          />
        ))}
      </div>
    );
  }