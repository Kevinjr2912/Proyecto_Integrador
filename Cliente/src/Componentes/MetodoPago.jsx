import React, { useState } from 'react';
import styles from '../Estilos/MetodoPago.module.css';

export default function MetodoPago() {
  const [metodoSelect, setMetodoSelect] = useState(null);
  const handleMetodoCambio = (metodo) => {
    setMetodoSelect(metodo);
  };

  return (
    <div className={styles.metodoPagoContainer}>
      <h2>Método de Pago</h2>

      <div className={styles.metodoPagoOption}>
        <input 
          type="radio" 
          id="transferencia" 
          name="metodoPago" 
          onChange={() => handleMetodoCambio('transferencia')} 
        />
        <label htmlFor="transferencia">
          <span className={styles.icono}></span> Transferencia
        </label>
        {metodoSelect === 'transferencia' && (
          <div className={styles.metodoPagoInfo}>
            <p>Titular de la tarjeta: Andre Kevin Andre</p>
            <p>Numero de la tarjeta: xxxx xxxx xxxx xxxx</p>
            <p>Banco: BBVA</p>
            <p>Concepto: F1OwnStore + Productos</p>
            <input 
              type="file" 
              accept=".pdf, .png, .jpg, .jpg" 
              className={styles.subirComprobante}
              onChange={handleMetodoCambio}
            />
          </div>
        )}
      </div>

      <div className={styles.metodoPagoOption}>
        <input 
          type="radio" 
          id="paypal" 
          name="metodoPago" 
          onChange={() => handleMetodoCambio('paypal')} 
        />
        <label htmlFor="paypal">
          <span className={styles.icono}></span> PayPal
        </label>
        {metodoSelect === 'paypal' && (
          <div className={styles.metodoPagoInfo}>
            <p>Nombre del beneficiario: André Kevin André</p>
            <p>Correo Electrónico: ExampleF1@gmail.com</p>
            <p>Concepto: F1OwnStore + Productos</p>
            <input 
              type="file" 
              accept=".pdf, .png, .jpg, .jpg" 
              className={styles.subirComprobante}
              onChange={handleMetodoCambio}
            />
          </div>
        )}
      </div>
    </div>
  );
}
