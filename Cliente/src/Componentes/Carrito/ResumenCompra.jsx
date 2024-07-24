import React from 'react';
import styles from '../../Estilos/ResumenCompra.module.css'; 

export default function ResumenCompra({ productos, total }) {
  return (
    <div className={styles.resumenCompra}>
      <h2>Resumen compra</h2>
      <div className={styles.detalle}>
        <span>Productos</span>
        <span>{productos}</span>
      </div>
      <div className={styles.detalle}>
        <span>Total</span>
        <span>{`$${total} MXN`}</span>
      </div>
      <button className={styles.continuarComprando}>Pagar</button>
    </div>
  );
}

