import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import FrameCasco from "../Icons/FrameCasco.svg";
import "../Estilos/Registro.css";
import Swal from "sweetalert2";

export default function Registro() {
  const navigate = useNavigate();
  const [primerNombre, setPrimerNombre] = useState("");
  const [segundoNombre, setSegundoNombre] = useState("");
  const [apellidoPaterno, setApellidoPaterno] = useState("");
  const [apellidoMaterno, setApellidoMaterno] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const handleSumbmit = async (event) => {
    event.preventDefault();

    console.log(password);
    console.log(confirmPassword);

    if (password === confirmPassword) {
      const dataCustomer = {
        primerNombre: primerNombre,
        segundoNombre: segundoNombre,
        apellidoPaterno: apellidoPaterno,
        apellidoMaterno: apellidoMaterno,
        email: email,
        password: password,
      };

      try {
        const response = await fetch(
          "http://localhost:3000/customers/addCustomer/",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dataCustomer),
          }
        );

        if (response.ok) {
          Swal.fire({
            icon: "success",
            title: "Cliente agregado exitosamente",
            showConfirmButton: false,
            timer: 1500,
          }).then(()=> navigate('/loginUsuario'));
        } else {
          Swal.fire({
            icon: "errorr",
            title: "Oops...",
            text: "Error al agregar datos del cliente",
          });
        }
      } catch (err) {
        Swal.fire({
          icon: "errorr",
          title: "Oops...",
          text: "Error al enviar la solicitud " + err,
        });
      }
    } else {
      Swal.fire({
        icon: "errorr",
        title: "Oops...",
        text: "Las contraseñas no coinciden",
      });
    }
  };

  return (
    <>
      <div className="registro-container">
        <div className="registro-box">
          <img className="img-helmet" src={FrameCasco} alt="helmet" />
          <h2>Registro</h2>
          <div className="login-prompt">
            <span>¿Ya tienes una cuenta? </span>
            <span
              className="login-link"
              onClick={() => {
                navigate("/loginUsuario");
              }}
            >
              Inicia sesión aquí
            </span>
          </div>
          <form onSubmit={handleSumbmit}>
            <input
              id="primer_nombre"
              type="text"
              placeholder="Primer nombre"
              value={primerNombre}
              onChange={(e) => setPrimerNombre(e.target.value)}
            />
            <input
              id="segundo_nombre"
              type="text"
              placeholder="Segundo nombre"
              value={segundoNombre}
              onChange={(e) => setSegundoNombre(e.target.value)}
            />
            <input
              id="apellido_paterno"
              type="text"
              placeholder="Apellido paterno"
              value={apellidoPaterno}
              onChange={(e) => setApellidoPaterno(e.target.value)}
            />
            <input
              id="apellido_materno"
              type="text"
              placeholder="Apellido materno"
              value={apellidoMaterno}
              onChange={(e) => setApellidoMaterno(e.target.value)}
            />
            <input
              id="email"
              type="email"
              placeholder="user@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              id="password"
              type="password"
              placeholder="contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              id="password"
              type="password"
              placeholder="Confirmar contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button className="login-button" type="submit">
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
