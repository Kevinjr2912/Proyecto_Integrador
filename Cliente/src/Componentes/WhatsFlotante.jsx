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
        href="https://api.whatsapp.com/send?phone=1234567891&text=Hola, me gustaria Obtener más información"
        class="float"
        target="_blank"
      >
        <i class="fa fa-whatsapp my-float "></i>
      </a>
    </>
  );
}
