import React from 'react';
import { Link } from 'react-router-dom';
import '../Estilos/NavBar.css';

const rutas = {
  'INICIO': '/',
  "MENU":"/homeAdmin",
  'GESTIÓN PRODUCTO': '/gestionarProductos',
  'DETALLES DE VENTA': '/detalleVenta',
  'CONOCENOS': '/',
  'OVEROLES': '/overoles',
  'CASCOS': '/cascos',
  'MIS ORDENES': '/ordenes'
};

export default function SeccionesTienda({ seccionesNav }) {
  return (
    <ul className="nav_rutas">
      {seccionesNav.map(seccion => (
        <li key={seccion.id}>
          <Link to={rutas[seccion.nombre]}>
            <span className="Hello">{seccion.nombre}</span>
          </Link>
        </li>
      ))}
 </ul>
);
}