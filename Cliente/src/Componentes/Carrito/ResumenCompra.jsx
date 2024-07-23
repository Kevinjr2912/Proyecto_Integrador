
import React from 'react';
import styles from '../../Estilos/ResumenCompra.module.css'; 

export default function ResumenCompra({ productos, envio, total }) {
  return (
    <div className={styles.resumenCompra}>
      <h2>Purchase summary</h2>
      <div className={styles.detalle}>
        <span>Products</span>
        <span>{productos}</span>
      </div>
      <div className={styles.detalle}>
        <span>Shipment</span>
        <span className={styles.envio}>{envio}</span>
      </div>
      <div className={styles.detalle}>
        <span>Total</span>
        <span>{total}</span>
      </div>
      <button className={styles.continuarComprando}>Pagar</button>
    </div>
  );
}
