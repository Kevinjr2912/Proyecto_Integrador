// LoginAdmin.js
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import FrameCasco from "../Icons/FrameCasco.svg";
import "../Estilos/Login.css";
import Swal from "sweetalert2";
import NavBar from "../Componentes/NavBar";
import AuthContext from "../Componentes/Contexto/AuthContext";


export default function LoginAdmin() {
    const seccionesNav = [
        {
            id: 0,
            nombre: 'INICIO',
        }
    ];
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { handleLogin } = useContext(AuthContext);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const data = { email, password };
  
      try {
        const response = await fetch("http://localhost:3000/admins/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
  
        if (response.ok) {
          const { token } = await response.json();
          handleLogin(true); // Indicar que es admin
          localStorage.setItem("token", token);
          Swal.fire({
            icon: "success",
            title: "Acceso concedido",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            navigate("/homeAdmin");
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Acceso denegado, verifica tus credenciales de acceso",
          });
        }
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Error al enviar la solicitud`,
        });
      }
    };
  return (
        <>
         <NavBar
            seccionesNav={seccionesNav}
            esSeccionCliente={false}
            titulo="Configuración"
        ></NavBar>

        <div className="login-container">
            <div className="login-box">
                <img className="img-helmet" src={FrameCasco} alt="helmet" />
                <h2>ADMINISTRADOR</h2>
                <h3>Iniciar sesión</h3>
                <form onSubmit={handleSubmit}>
                    <input id="input-email" type="email" placeholder="user@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    <input id="input-password" type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <button className="login-button" type="submit">Log in</button>
                </form>
            </div>
        </div>
        </>
    );

}
