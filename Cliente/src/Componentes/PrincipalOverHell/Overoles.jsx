import React, { useEffect, useState } from "react";
import CardProducto from "../CardProducto";
import NewCarrusel from "../NewCarrusel";

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
          
    <div style={{ 
        paddingTop: '5%', 
      }}
        
      className="product-list"
      
      
      
      >
        <NewCarrusel>
        {products.map((product) => (
          <CardProducto
          key={product.idProducto}
          id={product.idProducto}
          src={`http://localhost:3000/uploads/${product.filename}`}
          alt={product.nombre}
          nombre={product.nombre}
          precio={product.precio}
          />
        ))}
        </NewCarrusel>
      </div>
    );
  }