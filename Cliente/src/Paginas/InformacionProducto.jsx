// import React, { useState } from "react";
// import NavBar from "../Componentes/NavBar";
// import ImagenesReferencia from "../Componentes/ImagenesReferencia";
// import imagen_home from '../Imagenes/imagen_home.jpg';
// import '../Estilos/InformacionProducto.css';
// import NombrePrecioProducto from "../Componentes/NombrePrecioProducto";
// import AccionesProducto from "../Componentes/AccionesProducto";
// import WhatsFlotante from "../Componentes/WhatsFlotante";

// export default function InformationProduct() {
//     const [carrito, setCarrito] = useState([]);

//     const agregarAlCarrito = (nuevoProducto) => {
//         console.log(`añadiendo al carrito: ${JSON.stringify(nuevoProducto)}`);
//         setCarrito(prevCarrito => {
//             // vertificar si ya existe el producto en el carrito
//             const productoExistente = prevCarrito.find(item => item.nombre === nuevoProducto.nombre);

//             if (productoExistente) {
//                 // actualizar el prodcuto del carrito
//                 const updatedCart = prevCarrito.map(item =>
//                     item.nombre === nuevoProducto.nombre
//                         ? { ...item, cantidad: item.cantidad + nuevoProducto.cantidad }
//                         : item
//                 );
//                 console.log(`carro axtualizao: ${JSON.stringify(updatedCart)}`);
//                 return updatedCart;
//             } else {
//                 // añadir el produco al carrito
//                 const updatedCart = [...prevCarrito, nuevoProducto];
//                 console.log(`nuevo producto al carro: ${JSON.stringify(updatedCart)}`);
//                 return updatedCart;
//             }
//         });
//     };

//     const producto = {
//         nombre: "Lorem ipsum dolor sit amet, consectetudijedienfbuc.",
//         precio: "$0.00 MXN",
//         img_principal: imagen_home,
//         img1: imagen_home,
//         img2: imagen_home,
//         img3: imagen_home,
//         img4: imagen_home,
//     };

//     const seccionesNav = [
//         {
//             id: 0,
//             nombre: "CONOCENOS",
//         },
//         {
//             id: 1,
//             nombre: "OVEROLES",
//         },
//         {
//             id: 2,
//             nombre: "CASCOS",
//         },
//         {
//             id: 3,
//             nombre: "MIS ORDENES",
//         },
//     ];

//     console.log(`carrito inicxail: ${JSON.stringify(carrito)}`);

//     return (
//         <>
//             <NavBar seccionesNav={seccionesNav} esSeccionCliente={true} />
//             <div className="box_container_page">
//                 <div className="product">
//                     <div className="aboutProduct">
//                         <ImagenesReferencia
//                             img_principal={producto.img_principal}
//                             img1={producto.img1}
//                             img2={producto.img2}
//                             img3={producto.img3}
//                             img4={producto.img4}
//                         />

//                         <div className="information">
//                             <NombrePrecioProducto
//                                 nombre={producto.nombre}
//                                 precio={producto.precio}
//                             />
//                             <AccionesProducto producto={producto} onAddToCart={agregarAlCarrito} />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }
//96 lineas 
import React, { useState } from "react";
import NavBar from "../Componentes/NavBar";
import ImagenesReferencia from "../Componentes/ImagenesReferencia";
import imagen_home from '../Imagenes/imagen_home.jpg';
import '../Estilos/InformacionProducto.css';
import NombrePrecioProducto from "../Componentes/NombrePrecioProducto";
import AccionesProducto from "../Componentes/AccionesProducto";
import CarritoP from "../Paginas/CarritoP"; 
import DescripcionProducto from "../Componentes/DescripcionProducto";

export default function InformationProduct() {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (nuevoProducto) => {
        console.log(`añadiendo al carrito: ${JSON.stringify(nuevoProducto)}`);
        setCarrito(prevCarrito => {
            const productoExistente = prevCarrito.find(item => item.nombre === nuevoProducto.nombre);

            if (productoExistente) {
                const updatedCart = prevCarrito.map(item =>
                    item.nombre === nuevoProducto.nombre
                        ? { ...item, cantidad: item.cantidad + nuevoProducto.cantidad }
                        : item
                );
                console.log(`actualizando carrito ${JSON.stringify(updatedCart)}`);
                return updatedCart;
            } else {
                const updatedCart = [...prevCarrito, nuevoProducto];
                console.log(`nuevo carrito ${JSON.stringify(updatedCart)}`);
                return updatedCart;
            }
        });
    };

    const producto = {
        nombre: "Lorem ipsum dolor sit amet, consectetudijedienfbuc.",
        precio: "$0.00 MXN",
        img_principal: imagen_home,
        img1: imagen_home,
        img2: imagen_home,
        img3: imagen_home,
        img4: imagen_home,
        descripcion: "me gustas muchodsdjkashdkjahdkjashdkjashdkajshdkasjdh kdhaskjdhaskjhd dhasjdhakjh hdasjkdhakhdsajk dhkasjdahskdhakjd dhakjdhakjdakj hdakjfkdgfkj dhakjdhasjk dhahdk khdhsakjd"
    };

    const seccionesNav = [
        { id: 0, nombre: "CONOCENOS" },
        { id: 1, nombre: "OVEROLES" },
        { id: 2, nombre: "CASCOS" },
        { id: 3, nombre: "MIS ORDENES" },
    ];

    console.log(`Initial cart: ${JSON.stringify(carrito)}`);

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
                        <div className="information">
                            <NombrePrecioProducto
                                nombre={producto.nombre}
                                precio={producto.precio}
                            />
                            <AccionesProducto producto={producto} onAddToCart={agregarAlCarrito} />
                            
                        <div className="descripcion">
                            <DescripcionProducto
                              descripcion={producto.descripcion}
                              
                            />
                        </div>


                            
                        </div>
                    </div>
                </div>
            </div>
            <CarritoP productos={carrito} />
        </>
    );
}
//86 lineas cion el componente carrito