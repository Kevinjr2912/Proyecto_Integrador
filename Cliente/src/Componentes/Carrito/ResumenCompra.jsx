import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../Estilos/ResumenCompra.module.css'; 
import Swal from 'sweetalert2';

export default function ResumenCompra({ productos, total }) {
  const navigate = useNavigate();

  const handlePagarClick = () => {
      navigate('/carritoPago/metodoEnvio');
    
    
  };

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
      <button onClick={handlePagarClick} className={styles.continuarComprando}>
        Pagar
      </button>
    </div>
  );
}
