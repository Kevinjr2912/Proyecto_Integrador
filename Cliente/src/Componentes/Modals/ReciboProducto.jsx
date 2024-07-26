import React from "react";
import styles from "../../Estilos/ReciboProducto.module.css";

export default function ReciboProducto() {
  return (
    <div className={styles.reciboProducto}>
      <h2>Recibo de pago.</h2>
      <div>
        Aquí va el recibo de pago.
      </div>
    </div>
  );
}
