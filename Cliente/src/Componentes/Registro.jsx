import { useNavigate } from 'react-router-dom';
import React from "react";
import FrameCasco from "../Icons/FrameCasco.svg";
import '../Estilos/Registro.css';

export default function Registro() {
    const navigate = useNavigate();
    const []
    return(
        <>
        <div className="registro-container">
            <div className="registro-box">
                <img className="img-helmet" src={FrameCasco} alt="helmet" />
                    <h2>Registro</h2>
                    <div className="login-prompt">
                        <span  >¿Ya tienes una cuenta? </span>
                        <span className="login-link" onClick={() => { navigate('/loginUsuario'); }}>Inicia sesión aquí</span>
                    </div>
                    <input id='primer_nombre' type='text' placeholder="Primer nombre"/>
                    <input id='segundo_nombre' type='text' placeholder="Segundo nombre"/>
                    <input id='apellido_paterno' type='text' placeholder="Apellido paterno" />
                    <input id='apellido_materno' type='text' placeholder="Apellido materno" />                    
                    <input id='email' type="email" placeholder="user@email.com" />
                    <input id='password' type="password" placeholder="contraseña" />
                    <input id='password' type='password' placeholder="Confirmar contraseña" />
                    <button className="login-button">Registrarse</button>
                    
            </div>
        </div>
        
        
        
        </>

    );
}