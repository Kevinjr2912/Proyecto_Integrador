import React, { useState, useEffect } from "react";
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

  return (
    <div className={styles.box}>
      <div className={styles.section}>
        <h2 className={styles.sectiontitle}>Equipos:</h2>
        <div className={styles.checkboxgroup}>
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
        </div>
      </div>
    </div>
  );
}
