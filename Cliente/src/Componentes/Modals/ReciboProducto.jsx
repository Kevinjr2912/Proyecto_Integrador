import React, { useEffect, useRef } from "react";

const ReciboProducto = ({ comprobantePagoUrl }) => {
  console.log("ReciboProducto URL:", comprobantePagoUrl);

  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.src = comprobantePagoUrl;
    }
  }, [comprobantePagoUrl]);

  return (
    <div>
      <h2>Recibo del Producto</h2>
      {comprobantePagoUrl ? (
        <img
          ref={imgRef}
          src={comprobantePagoUrl}
          style={{ width: "70%", height: "1200px" }}
          alt="Recibo del Producto"
        />
      ) : (
        <p>No se pudo cargar el documento de imagen.</p>
      )}
    </div>
  );
};

export default ReciboProducto;
