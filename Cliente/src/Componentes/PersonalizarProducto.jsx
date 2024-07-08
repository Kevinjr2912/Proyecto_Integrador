import React from "react";
import "../Estilos/PersonalizarProducto.css";

export default function PersonalizarProducto() {
  return (
    <>
      <div className="main-container">
        <h1>Personalizar Producto</h1>
        <div className="second-container">
          <div className="form-container">
            <h3>General</h3>
            <div className="tallas-container">
              <label htmlFor="tallas">Tallas para el producto:</label>
              <input type="number" id="largo" placeholder="Largo" />
              <input type="number" id="ancho" placeholder="Ancho" />
            </div>
            <div className="nombre-container">
              <label htmlFor="nombre">
                Nombre que te gustaría en el producto:
              </label>
              <input type="text" id="nombre" placeholder="Nombre" />
            </div>
            <div className="bandera-container">
              <label htmlFor="bandera">
                Bandera que te gistaría en el producto:
              </label>
              <input type="text" id="bandera" placeholder="Nombre Bandera" />
            </div>
            <div className="imgPersonalizacion-container">
              <label htmlFor="imagen">O envía el diseño que te gustaría:</label>
              <input type="file" id="imagen" />
            </div>
            <button>Enviar diseño</button>
          </div>

          <div className="imgs-container">
            <div className="img-placeholder"></div>
            <div className="img-placeholder"></div>
            <div className="img-placeholder"></div>
          </div>
        </div>
      </div>
    </>
  );
}
