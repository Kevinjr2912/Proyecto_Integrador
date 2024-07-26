import React, { useState } from "react";
import NavBar from "../Componentes/NavBar";
import ImagenesReferencia from "../Componentes/ImagenesReferencia";
import imagen_home from '../Imagenes/imagen_home.jpg';
import '../Estilos/InformacionProducto.css';
import NombrePrecioProducto from "../Componentes/NombrePrecioProducto";
import AccionesProducto from "../Componentes/AccionesProducto";
import CarritoP from "../Paginas/CarritoP"; 
import DescripcionProducto from "../Componentes/DescripcionProducto";
import Reseñas from "../Componentes/Reseñas";

export default function InformationProduct() {
  const [carrito, setCarrito] = useState([]);
  const [reseñas, setReseñas] = useState([
    { rating: 5, comentario: "Excelente producto" },
    { rating: 4, comentario: "Muy bueno, pero podría mejorar" }
  ]);

  const agregarAlCarrito = (nuevoProducto) => {
    setCarrito(prevCarrito => {
      const productoExistente = prevCarrito.find(item => item.nombre === nuevoProducto.nombre);

      if (productoExistente) {
        return prevCarrito.map(item =>
          item.nombre === nuevoProducto.nombre
            ? { ...item, cantidad: item.cantidad + nuevoProducto.cantidad }
            : item
        );
      } else {
        return [...prevCarrito, nuevoProducto];
      }
    });
  };

  const agregarReseña = (nuevaReseña) => {
    setReseñas(prevReseñas => [...prevReseñas, nuevaReseña]);
  };

  const producto = {
    idProductos: 2,
    nombre: "Lorem ipsum dolor sit amet, consectetudijedienfbuc.",
    precio: "$0.00 MXN",
    img_principal: imagen_home,
    img1: imagen_home,
    img2: imagen_home,
    img3: imagen_home,
    img4: imagen_home,
    descripcion: "Descripción del producto...",
    cantidad: 1, 
  };

  const seccionesNav = [
    { id: 0, nombre: "CONOCENOS" },
    { id: 1, nombre: "OVEROLES" },
    { id: 2, nombre: "CASCOS" },
    { id: 3, nombre: "MIS ORDENES" },
  ];

  return (
    <>
      <NavBar seccionesNav={seccionesNav} esSeccionCliente={true} />
      <div className="box_container_page">
        <div className="product">
          <div className="aboutProduct">
            <ImagenesReferencia
              img_principal={producto.img_principal}
              img1={producto.img1}
              img2={producto.img2}
              img3={producto.img3}
              img4={producto.img4}
            />
            <div className="productInfo">
              <NombrePrecioProducto
                nombre={producto.nombre}
                precio={producto.precio}
              />
              <AccionesProducto producto={producto} agregarAlCarrito={agregarAlCarrito} />
              <CarritoP carrito={carrito} />
              <DescripcionProducto descripcion={producto.descripcion} />
            </div>
          </div>
          <Reseñas reseñas={reseñas} agregarReseña={agregarReseña} idProductos={producto.idProductos} />
        </div>
      </div>
    </>
  );
}
