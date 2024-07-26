import React from "react";
import styles from "../Estilos/Ordenes.module.css";
import FrameCard from "../Icons/FrameCard.svg";

export default function Ordenes({ nombreProducto, fechaVenta, linkEnvio, autorizacion }) {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>MIS ORDENES</div>
        <div className={styles.row}>
          <h4 className={styles.cell}>{nombreProducto}</h4>
        </div>
        <div className={styles.row}>
          <h4 className={styles.cell}>{fechaVenta}</h4>
        </div>
        <div className={styles.row}>
          <h4 className={styles.cell}>{linkEnvio}</h4>
        </div>
        <div className={styles.row}>
          <h4 className={`${styles.cell} ${autorizacion ? styles.autorizado : styles.noAutorizado}`}>
            {autorizacion ? "Autorizado" : "No autorizado"}
            {autorizacion && <img src={FrameCard} alt="owo" className={styles.icon}  /> } 
          </h4>
        </div>
      </div>
    </div>
  );
}
