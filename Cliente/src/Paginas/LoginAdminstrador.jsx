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
        const data = new FormData();
        data.append("email", email);
        data.append("password", password);
    
        try {
          const response = await fetch("http://localhost:3000/admins/login", {
            method: "POST",
            body: data,
          });
    
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          Swal.fire({
            icon: "success",
            title: 'Acceso concedido',
            showConfirmButton: false,
            timer: 1500,
          });
    
          const result = await response.json();
    
        } catch (error) {
            Swal.fire({
                icon: "errorr",
        
                title: "Oops...",
                text: `Las credenciales de acceso no coinciden`,
            });
        }
      };

      //() => { navigate('/GestionarProductosP');
    return(
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
                    <input type="email" placeholder="user@email.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button className="login-button" onClick={handleSubmit} >Log in</button>
                </div>
            </div>
        </>
    );
}