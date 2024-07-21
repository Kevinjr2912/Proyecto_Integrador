<<<<<<< HEAD
import React, { useState } from "react";
import styles from "../Estilos/Filtros.module.css";

export default function Filtros({ onFilterChange }) {
  const [selectedTeams, setSelectedTeams] = useState([]);

  const handleOnCheckBox = (event) => {
    const { value, checked } = event.target;
    setSelectedTeams((prevSelectedTeams) => {
      if (checked) {
        return [...prevSelectedTeams, value];
      } else {
        return prevSelectedTeams.filter((team) => team !== value);
      }
    });
  };

  useEffect(() => {
    onFilterChange(selectedTeams);
  }, [selectedTeams, onFilterChange]);

=======
import React from "react";
import styles from "../Estilos/Filtros.module.css";

export default function Filtros() {
>>>>>>> ab265804fdb9b7ff0095a95fd6760f23a2381cad
  return (
    <div className={styles.box}>
      <div className={styles.section}>
        <h2 className={styles.sectiontitle}>TEAMS:</h2>
        <div className={styles.checkboxgroup}>
<<<<<<< HEAD
          {["Alpine", "Kick Sauber", "Mercedes", "Ayrton Senna", "RedBull", "Ferrari", "MacLaren", "Aston Martin"].map((team) => (
            <label key={team} className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="team"
                value={team}
                onChange={handleOnCheckBox}
              />{" "}
              {team}
            </label>
          ))}
=======
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
>>>>>>> ab265804fdb9b7ff0095a95fd6760f23a2381cad
        </div>
      </div>
    </div>
  );
}
