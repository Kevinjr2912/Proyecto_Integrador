import React, { useState } from 'react';
import styles from '../Estilos/MetodoPago.module.css';
import FramePayPalPago from "../Icons/FramePayPalPago.svg";
import FrameTransferencia from "../Icons/FrameTransferencia.svg";

export default function MetodoPago() {
  // Valores estáticos
  const idPedido = 2;
  const idEstatus = 2;

  const [metodoSelect, setMetodoSelect] = useState("");
  const [archivo, setArchivo] = useState(null);

  const handleMetodoCambio = (metodo) => {
    setMetodoSelect(metodo);
  };

  const handleArchivoCambio = (e) => {
    setArchivo(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!archivo) {
      alert('Por favor, selecciona un archivo antes de pagar.');
      return;
    }

    const formData = new FormData();
    formData.append('comprobante', archivo);
    formData.append('idPedido', idPedido);
    formData.append('idEstatus', idEstatus);

    try {
      const response = await fetch("http://localhost:3000/comprobantes/addComprobante", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        alert('Comprobante subido exitosamente');
      } else {
        alert('Error al subir el comprobante');
      }
    } catch (error) {
      console.error('Error al subir el comprobante:', error);
      alert('Error al subir el comprobante');
    }
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
          <span className={styles.icono}><img src={FrameTransferencia} alt="" /></span> Transferencia
        </label>
        <div className={metodoSelect === 'transferencia' ? styles.active : styles.inactive}>
          <div className={styles.metodoPagoInfo}>
            <p>Titular de la tarjeta: Andre Kevin Andre</p>
            <p>Numero de la tarjeta: xxxx xxxx xxxx xxxx</p>
            <p>Banco: BBVA</p>
            <p>Concepto: F1OwnStore + Productos</p>
            <input 
              type="file" 
              accept=".pdf, .png, .jpg, .jpeg" 
              className={styles.subirComprobante}
              onChange={handleArchivoCambio}
            />
<<<<<<< HEAD
            <button onClick={handleSubmit}>Subir Comprobante</button>
=======
            <button className={styles.botonComprobante}  onClick={handleSubmit}>Subir Comprobante</button> {/* Nuevo botón para enviar */}
>>>>>>> 073de4a1e0b822c7eddf6e7be1e6fcb83fe69e88
          </div>
        </div>
      </div>

      <div className={styles.metodoPagoOption}>
        <input 
          type="radio" 
          id="paypal" 
          name="metodoPago" 
          onChange={() => handleMetodoCambio('paypal')} 
        />
        <label htmlFor="paypal">
          <span className={styles.icono}><img src={FramePayPalPago} alt="" /></span> PayPal
        </label>
        <div className={metodoSelect === 'paypal' ? styles.active : styles.inactive}>
          <div className={styles.metodoPagoInfo}>
            <p>Nombre del beneficiario: André Kevin André</p>
            <p>Correo Electrónico: ExampleF1@gmail.com</p>
            <p>Concepto: F1OwnStore + Productos</p>
            <input 
              type="file" 
              accept=".pdf, .png, .jpg, .jpeg" 
              className={styles.subirComprobante}
              onChange={handleArchivoCambio}
            />
<<<<<<< HEAD
            <button onClick={handleSubmit}>Subir Comprobante</button>
=======
            <button className={styles.botonComprobante} onClick={handleSubmit}>Subir Comprobante</button> {/* Nuevo botón para enviar */}
>>>>>>> 073de4a1e0b822c7eddf6e7be1e6fcb83fe69e88
          </div>
        </div>
      </div>
    </div>
  );
}
