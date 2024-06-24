import React from "react";
import helmet from '../../Imagenes/helmet.svg'
import '../../Estilos/Registro.css';

export default function Registro() {

    return(
        <>
        <div className="registro-container">
                <div className="registro-box">
        <img className="img-helmet" src={helmet} alt="helmet" />
                    <h2>Registro</h2>
                    <div className="login-prompt">
                        <span>¿Ya tienes una cuenta? </span>
                        <span className="login-link" >Inicia sesión aquí</span>
                    </div>
                    <input type='nombre' placeholder="Nombre"/>
                    <input type='apellidos' placeholder="Apellidos completos" />                    
                    <input type="email" placeholder="user@email.com" />
                    <input type="password" placeholder="contraseña" />
                    <input type='password' placeholder="Confirmar contraseña" />
                    <button className="login-button">Registrarse</button>
                    
            </div>
        </div>
        
        
        
        </>

    );
}