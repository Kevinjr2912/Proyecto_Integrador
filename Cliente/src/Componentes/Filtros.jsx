import React from "react";
import styles from "../Estilos/Filtros.module.css";

export default function Filtros() {
  return (
    <div className={styles.box}>
      <div className={styles.section}>
        <h2 className={styles.sectiontitle}>TEAMS:</h2>
        <div className={styles.checkboxgroup}>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" name="team" value="alpine" /> Alpine
          </label>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" name="team" value="kick-sauber" /> Kick
            Sauber
          </label>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" name="team" value="mercedes" /> Mercedes
          </label>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" name="team" value="ayrton-senna" /> Ayrton
            Senna
          </label>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" name="team" value="redbull" /> RedBull
          </label>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" name="team" value="ferrari" /> Ferrari
          </label>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" name="team" value="maclaren" /> MacLaren
          </label>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" name="team" value="aston-martin" /> Aston
            Martin
          </label>
        </div>
      </div>
    </div>
  );
}