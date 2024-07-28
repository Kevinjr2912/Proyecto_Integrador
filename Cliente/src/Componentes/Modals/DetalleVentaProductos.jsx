import React from 'react';
import styles from '../../Estilos/DetalleVentaP.module.css';

const DetalleVentaProductos = ({ data }) => {
  return (
    <div className={styles.detalleVentaProductos}>
      <h2>Detalles del Pedido</h2>
      <p><strong>Email del Cliente:</strong> {data.email}</p>
      <p><strong>Fecha de Compra:</strong> {data.fechaCompra}</p>
      <p><strong>Precio Total:</strong> ${data.precioTotal}</p>
      <p><strong>Comprobante de Pago:</strong> {data.comprobantePago}</p>
    </div>
  );
};

export default DetalleVentaProductos;
