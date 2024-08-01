import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../Componentes/NavBar";
import "../Estilos/InformacionProducto.css";
import AccionesProducto from "../Componentes/AccionesProducto";
import DescripcionProducto from "../Componentes/DescripcionProducto";
import Reseñas from "../Componentes/Reseñas";
import ImagenesReferencia from "../Componentes/ImagenesReferencia";
import NombrePrecioProducto from "../Componentes/NombrePrecioProducto";
import tallaReferenciaCascos from "../Imagenes/tallaReferenciaCascos.jpg";
import tallaReferenciaOveroles from "../Imagenes/tallaReferenciaOveroles.webp";
import Swal from "sweetalert2";
import Footer from "../Componentes/Footer";

export default function InformationProduct() {
  const { idProducto } = useParams();
  const token = localStorage.getItem('token');
  const idCliente = localStorage.getItem('idCliente');
  const [producto, setProducto] = useState(null);
  const [carrito, setCarrito] = useState([]);
  const navigate = useNavigate();
  const [reseñas, setReseñas] = useState([
    { rating: 5, comentario: "Excelente producto" },
    { rating: 4, comentario: "Muy bueno, pero podría mejorar" },
  ]);

  console.log(token  + " Este es el token en info")

  const seccionesNav = [
    { id: 0, nombre: "CONOCENOS" },
    { id: 1, nombre: "OVEROLES" },
    { id: 2, nombre: "CASCOS" },
    { id: 3, nombre: "MIS ORDENES" },
  ];


   useEffect(() => {
    if (!token) {
      navigate('/loginUsuario');
      return;
    }
  
      const fetchProduct = async () => {
        try {
          const response = await fetch(
            `http://localhost:3000/products/getInformationProduct/${idProducto}`,{
              headers: {
                'Authorization': `Bearer ${token}`
              }
            }
          );
          const data = await response.json();
          setProducto(data);
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      };
  
      fetchProduct();
    }, [idProducto]);

  const agregarAlCarrito = async (nuevoProducto) => {
    console.log(nuevoProducto);
    
    try {
      const response = await fetch(`http://localhost:3000/cars/addProductToCar/${idCliente}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          idProducto: nuevoProducto.idProducto,
          cantidad: nuevoProducto.cantidad,
        }),
      });

      if (!response.ok) {
        throw new Error('Error al agregar el producto al carrito');
      }

      setCarrito((prevCarrito) => {
        const productoExistente = prevCarrito.find(
          (item) => item.nombre === nuevoProducto.nombre
        );

        let carritoActualizado;

        if (productoExistente) {
          carritoActualizado = prevCarrito.map((item) =>
            item.nombre === nuevoProducto.nombre
              ? { ...item, cantidad: item.cantidad + nuevoProducto.cantidad }
              : item
          );
        } else {
          carritoActualizado = [...prevCarrito, nuevoProducto];
        }

        Swal.fire({
          title: "Producto agregado",
          text:'Has agregado un producto al carrito',
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });

        return carritoActualizado;
      });
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'Hubo un problema al agregar el producto al carrito.',
        icon: 'error',
      });
    }
  };

  const quitarDelCarrito = (producto) => {
    setCarrito((prevCarrito) => {
      return prevCarrito.filter((item) => item.nombre !== producto.nombre);
    });
  };

  const agregarReseña = (nuevaReseña) => {
    setReseñas((prevReseñas) => [...prevReseñas, nuevaReseña]);
  };

  if (!producto) {
    return <div>Loading...</div>;
  }

  const imagenProductoTalla =
    producto.nombreCategoria === "Casco"
      ? tallaReferenciaCascos
      : tallaReferenciaOveroles;

  return (
    <>
      <NavBar seccionesNav={seccionesNav} esSeccionCliente={true} />
      <div className="box_container_page">
        <div className="product">
          <div className="aboutProduct">
            <ImagenesReferencia
              img1={producto.img1Filename}
              img2={producto.img2Filename}
              img3={producto.img3Filename}
              img4={imagenProductoTalla}
            />
            <div className="information">
              <NombrePrecioProducto
                nombre={producto.nombre}
                precio={producto.precio}
              />
              <AccionesProducto
                producto={producto}
                onAddToCart={agregarAlCarrito}
              />
              <div className="descripcion">
                <DescripcionProducto descripcion={producto.descripcion} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Reseñas reseñas={reseñas} agregarReseña={agregarReseña} idProducto={idProducto}/>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}