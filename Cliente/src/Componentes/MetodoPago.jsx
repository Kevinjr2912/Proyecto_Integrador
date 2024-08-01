import React, { useState } from 'react';
import styles from '../Estilos/MetodoPago.module.css';
import FramePayPalPago from "../Icons/FramePayPalPago.svg";
import FrameTransferencia from "../Icons/FrameTransferencia.svg";
import Swal from 'sweetalert2';

export default function MetodoPago() {
  const [metodoSelect, setMetodoSelect] = useState("");
  const [archivo, setArchivo] = useState(null);
  const token = localStorage.getItem('token');
  const idCliente = localStorage.getItem('idCliente');

  const handleMetodoCambio = (metodo) => {
    setMetodoSelect(metodo);
  };

  const handleArchivoCambio = (e) => {
    setArchivo(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!archivo) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, selecciona un archivo antes de pagar.',
        confirmButtonText: 'Aceptar'
      });
      return;
    }

    const formData = new FormData();
    formData.append('comprobante', archivo);
    formData.append('idCliente', idCliente);

    try {
      const response1 = await fetch("http://localhost:3000/comprobantes/addComprobante", {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      if (response1.ok) {
        const data = await response1.json();
        const response2 = await fetch(`http://localhost:3000/orders/addDetailsOrderCustomer/${idCliente}`, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ idPedido: data.idPedido })
        });

        if (response2.ok) {
          Swal.fire({
            icon: 'success',
            title: 'Compra Validada',
            text: 'Tu compra ha pasado al proceso de validación, te pedimos paciencia.',
            confirmButtonText: 'Aceptar'
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Error al agregar detalles del pedido.',
            confirmButtonText: 'Aceptar'
          });
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error al subir el comprobante.',
          confirmButtonText: 'Aceptar'
        });
      }
    } catch (error) {
      console.error('Error al subir el comprobante:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error al subir el comprobante.',
        confirmButtonText: 'Aceptar'
      });
    }
  };

  return (
    <div className={styles.metodoPagoContainer}>
      <h2>Método de Pago</h2>

      <div className={styles.metodoPagoOption}>
        <input 
        className={styles.metodoPagoOption_input}
          type="radio" 
          id="transferencia" 
          name="metodoPago" 
          onChange={() => handleMetodoCambio('transferencia')} 
        />
        <label className={styles.metodoPagoOption_label} htmlFor="transferencia">
          <span className={styles.icono}><img src={FrameTransferencia} alt="" /></span> Transferencia
        </label>
        <div className={metodoSelect === 'transferencia' ? styles.active : styles.inactive}>
          <div className={styles.metodoPagoInfo}>
          <p>Titular de la tarjeta: Luis Antonio Cisneros Mazariegos</p>
            <p>Numero de la tarjeta: 5247 8753 9987 5469</p>
            <p>Banco: BBVA</p>
            <p>Concepto: F1OwnStore Productos</p>
            <input 
              type="file" 
              accept=".pdf, .png, .jpg, .jpeg" 
              className={styles.subirComprobante}
              onChange={handleArchivoCambio}
            />
            <button className={styles.botonComprobante}  onClick={handleSubmit}>Subir Comprobante</button> {/* Nuevo botón para enviar */}
          </div>
        </div>
      </div>

      <div className={styles.metodoPagoOption}>
        <input 
          className={styles.metodoPagoOption_input}
          type="radio" 
          id="paypal" 
          name="metodoPago" 
          onChange={() => handleMetodoCambio('paypal')} 
        />
        <label className={styles.metodoPagoOption_label} htmlFor="paypal">
          <span className={styles.icono}><img src={FramePayPalPago} alt="" /></span> PayPal
        </label>
        <div className={metodoSelect === 'paypal' ? styles.active : styles.inactive}>
          <div className={styles.metodoPagoInfo}>
          <p>Nombre del beneficiario: Luis Antonio Cisneros Mazariegos</p>
            <p>Correo Electrónico: luisantonioC@gmail.com</p>
            <p>Concepto: F1OwnStore Productos</p>
            <input 
              type="file" 
              accept=".pdf, .png, .jpg, .jpeg" 
              className={styles.subirComprobante}
              onChange={handleArchivoCambio}
            />
            <button className={styles.botonComprobante} onClick={handleSubmit}>Subir Comprobante</button> {/* Nuevo botón para enviar */}
          </div>
        </div>
      </div>
    </div>
  );
}
