import React, { useState } from "react";
import FrameCasco from "../Icons/FrameCasco.svg";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { useAuth } from "./Contexto/AuthContext"; 

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth(); // Usa el contexto de autenticación
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { email, password };

    try {
      const response = await fetch('http://localhost:3000/customers/loginCustomer/', {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: 'Acceso concedido',
          showConfirmButton: false,
          timer: 1500,
        });
        login('customer'); // atualiza el estado de la sesión como cliente
        navigate('/'); // redirige a la ruta correspondiente
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
  return(
    <>
    <div className="login-container">
            <div className="login-box">
     <img className="img-helmet" src={FrameCasco} alt="helmet" />
                <h2>Login</h2>
                <h3>Iniciar sesión</h3>
                <form onSubmit={handleSubmit}>
                    <input 
                    id='email' 
                    type="email" placeholder="user@email.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <input id='password' type="password" placeholder="contraseña" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="login-button" >Log in</button>
                </form>
                <div className="registro-prompt">
                    <span>¿Todavía no tienes una cuenta? <br /></span>
                    <span className="registro-link" onClick={() => { navigate('/RegistroPagina'); }} >Regístrate aquí.</span>
                </div>
            </div>
        </div>

    </>

);

}
