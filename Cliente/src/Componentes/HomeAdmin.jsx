import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "../Estilos/HomeAdmin.module.css";

export default function HomeAdmin() {
  const navigate = useNavigate();

  const handleGestionarProductosClick = () => {
    navigate('/gestionarProductos');
  };

  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.container}>
          <div className={styles.container_topDiv}>
            <h2>Adminstrador</h2>
            <h2>luisantonioC126@gmail.com</h2>
          </div>
          <div className={styles.container_detalles}>
            <button className={styles.detalles_button} onClick={handleGestionarProductosClick}>Gestión de productos</button>
            <button className={styles.detalles_button} onClick={() => { navigate('/detalleVenta'); }}>Detalles de ventas</button>
          </div>
        </div>
      </div>
    </>
  );
}
