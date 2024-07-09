import React from "react";
import '../Estilos/Filtros.css'

export default function Filtros(){
    return(
        <div class="box">
            <div class="section">
                <h2 class="section-title">TEAMS:</h2>
                <div class="checkbox-group">
                    <label><input type="checkbox"/> Alpine</label>
                    <label><input type="checkbox"/> Kick Sauber</label>
                    <label><input type="checkbox"/> Mercedes</label>
                    <label><input type="checkbox"/> Ayrton Senna</label>
                    <label><input type="checkbox"/> RedBull</label>
                    <label><input type="checkbox"/> Ferrari</label>
                    <label><input type="checkbox"/> MacLaren</label>
                    <label><input type="checkbox"/> Aston Martin</label>
                </div>
            </div>
            <div class="section">
                <h2 class="section-title">OFFERS:</h2>
                <div class="checkbox-group">
                    <label><input type="checkbox"/> Yes</label>
                    <label><input type="checkbox"/> No</label>
                </div>
            </div>
        </div>
    )
}