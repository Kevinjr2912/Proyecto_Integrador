import React from "react";
import "../Estilos/WhatsFlotante.css";
export default function WhatsFlotante() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
      />
      <a
        href="https://api.whatsapp.com/send?phone=9623818989&text=Hola,%20me%20gustaria%20Obtener%20m%C3%A1s%20informaci%C3%B3n%20de%20los%20productos:)"
        class="float"
        target="_blank"
      >
        <i class="fa fa-whatsapp my-float "></i>
      </a>
    </>
  );
}
