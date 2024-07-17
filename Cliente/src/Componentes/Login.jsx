import { useNavigate } from 'react-router-dom';
import React from "react";
import FrameCasco from "../Icons/FrameCasco.svg";
import '../Estilos/Login.css';
export default function Login() {

    const navigate = useNavigate();
    return(
        
        <>
        <div className="login-container">
                <div className="login-box">
         <img className="img-helmet" src={FrameCasco} alt="helmet" />
                    <h2>Login</h2>
                    <h3>Iniciar sesión</h3>
                    <input id='email' type="email" placeholder="user@email.com" />
                    <input id='password' type="password" placeholder="contraseña" />
                    <button className="login-button" >Log in</button>
                    <div className="registro-prompt">
                        <span>¿Todavía no tienes una cuenta? <br /></span>
                        <span className="registro-link" onClick={() => { navigate('/RegistroPagina'); }} >Regístrate aquí.</span>
                    </div>
                </div>
            </div>

        </>

    );

}