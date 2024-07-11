import React from "react";
import { useNavigate } from 'react-router-dom';
import NavBar from "../Componentes/NavBar";
import FrameCasco from "../Icons/FrameCasco.svg";
import '../Estilos/Login.css';


export default function LoginPagina(){
    const navigate = useNavigate();
    const handleSubmit = async () => {
        const response = await fetch('')
    }

    const seccionesNav = [
        {
            id: 0,
            nombre: 'INICIO',
        }

    ];

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
                    <input type="email" placeholder="user@email.com" />
                    <input type="password" placeholder="Contraseña" />
                    <button className="login-button" onClick={() => { navigate('/GestionarProductosP'); }} >Log in</button>
                </div>
            </div>
        </>
    );
}