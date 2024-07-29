import React, { useEffect, useState } from "react";
import CardProducto from "../CardProducto";
import NewCarrusel from "../NewCarrusel";
export default function Cascos() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/products/getOchoHelmets")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          setError("Error: El servidor no devolvió un array.");
        }
      })
      .catch((error) => setError("Error fetching helmets: " + error.message));
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    
    <div style={{ 
      paddingTop: '5%', 
    }}>
      <NewCarrusel
     
      >
      {products.length > 0 ? (
        products.map((product) => (
          <CardProducto
          key={product.idProducto}
          id={product.idProducto}
          src={`http://localhost:3000/uploads/${product.filename}`}
          alt={product.nombre}
          nombre={product.nombre}
          precio={product.precio}
          />
        ))
      ) : (
        <p>No hay productos disponibles.</p>
      )}
      </NewCarrusel>
    </div>
  );
}