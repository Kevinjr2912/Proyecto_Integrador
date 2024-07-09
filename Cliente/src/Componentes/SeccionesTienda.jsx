import React from 'react';
import { Link } from 'react-router-dom';
import '../Estilos/NavBar.css';  

export default function SeccionesTienda({ seccionesNav }) {
  return (
    <ul className="nav_rutas">
      {seccionesNav.map(seccion => (
        <li key={seccion.id}>
          <Link to={seccion.nombre === 'INICIO' ? '/' : `/${seccion.nombre.toLowerCase().replace(' ', '-')}`}>
            <span className="Hello">{seccion.nombre}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
