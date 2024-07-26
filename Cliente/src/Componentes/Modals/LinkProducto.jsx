import React from "react";
import styles from "../../Estilos/LinkProducto.module.css";

export default function LinkProducto() {
  return (
    <div className={styles.linkProducto}>
      <h2>Delivery truck (link):</h2>
      <form>
        <input type="text" placeholder="Link" className={styles.inputField} />
        <button type="submit" className={styles.sendButton}>Send</button>
      </form>
    </div>
  );
}
