import React from "react";
import FrameCasco from "../Icons/FrameCasco.svg";
import '../Estilos/Login.css';
export default function Login() {

    return(
        <>
        <div className="login-container">
                <div className="login-box">
         <img className="img-helmet" src={FrameCasco} alt="helmet" />
                    <h2>Login</h2>
                    <h3>Iniciar sesión</h3>
                    <input type="email" placeholder="user@email.com" />
                    <input type="password" placeholder="Contraseña" />
                    <button className="login-button" >Log in</button>
                    <div className="registro-prompt">
                        <span>¿Todavía no tienes una cuenta? <br /></span>
                        <span className="registro-link" >Regístrate aquí.</span>
                    </div>
                </div>
            </div>

        </>

    );

}