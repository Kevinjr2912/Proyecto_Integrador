import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import NavBar from "../Componentes/NavBar";
import Swal from "sweetalert2";
import FrameCasco from "../Icons/FrameCasco.svg";
import '../Estilos/Login.css';

export default function LoginPagina(){
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const seccionesNav = [
    {
      id: 0,
      nombre: 'INICIO',
    }
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      email: email,
      password: password,
    };
  
    try {
      const response = await fetch("http://localhost:3000/admins/login", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        const result = await response.json();
        const token = result.token;
  
        // Guardar el token en localStorage
        localStorage.setItem('jwtToken', token);
  
        Swal.fire({
          icon: "success",
          title: 'Acceso concedido',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          navigate('/homeAdmin');
        });
      } else {
        Swal.fire({
          icon: "error",
          title: 'Acceso denegado',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Error al hacer la petición al servidor ${error}`,
      });
    }
  };
  

  return (
    <>
      <NavBar
        seccionesNav={seccionesNav}
        esSeccionCliente={false}
        titulo="Configuración"
      />

      <div className="login-container">
        <div className="login-box">
          <img className="img-helmet" src={FrameCasco} alt="helmet" />
          <h2>ADMINISTRADOR</h2>
          <h3>Iniciar sesión</h3>
          <form onSubmit={handleSubmit}>
            <input id="input-email" type="email" placeholder="user@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input id="input-password" type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button className="login-button" type="submit">Log in</button>
          </form>
        </div>
      </div>
    </>
  );
}
