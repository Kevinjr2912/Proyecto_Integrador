import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import styles from "../Estilos/ShippingData.module.css"; 

export default function ShippingData() {
  const [codigoPostal, setCodigoPostal] = useState("");
  const [estado, setEstado] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [colonias, setColonias] = useState([]);
  const [coloniaSeleccionada, setColoniaSeleccionada] = useState("");
  const [calle, setCalle] = useState("");
  const [numeroExterior, setNumeroExterior] = useState("");
  const [referencia, setReferencia] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const idCliente = localStorage.getItem('idCliente');

  const blurCP = async (postalCode) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/codigo_postal?cp=${postalCode}`,{
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();

      setEstado(data.codigo_postal.estado);
      setMunicipio(data.codigo_postal.municipio);
      setColonias(data.codigo_postal.colonias);
    } catch (err) {
      console.log("Error al enviar la petición al servidor:", err);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      document.getElementById("calle").value === "" ||
      document.getElementById("textReferencia").value === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `No pueden quedar campos vacíos`
      });
    } else if (!document.getElementById("colonias").value) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Debes seleccionar una colonia, no has seleccionado una`,
      });
    } else if (
      document.getElementById("numero_exterior").value !== "" &&
      isNaN(document.getElementById("numero_exterior").value)
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `El valor para el campo de número exterior debe ser numérico`,
      });
    } else {
      const data = {
        codigo_postal: codigoPostal,
        nombre_estado: estado,
        nombre_municipio: municipio,
        nombre_colonia: coloniaSeleccionada,
        calle: calle,
        numeroExterior: numeroExterior,
        referencia: referencia,
      };

      try {
        const response = await fetch(`
          http://localhost:3000/shippingData/addShippingInformation/${idCliente}`,
          {
            method: "POST",
            headers: { 
              "Content-Type": "application/json",
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data),
          }
        );

        if (response.ok) {
          Swal.fire({
            icon: "success",
            title: "Datos de envío establecidos correctamente",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => navigate("/carritoPago/metodoEnvio"));
        } else {
          console.log("Error en la respuesta al enviar la solicitud");
        }
      } catch (err) {
        console.log("Error al enviar la solicitud al servidor:", err);
      }
    }
  };

  const handleShippingMethod = () => {
    navigate('/carritoPago/metodoEnvio');
  } 

  return (
    <form className={styles.containerShippingData} onSubmit={handleSubmit}>
      <div className={styles.containerForm}>
      <div >
        <label htmlFor="codigo_postal">Código postal</label>
        <input className={styles.inputShipping}
          type="text"
          name="CodigoPostal"
          placeholder="Código postal"
          id="codigo_postal"
          onBlur={() => blurCP(codigoPostal)}
          onChange={(e) => setCodigoPostal(e.target.value)}
          value={codigoPostal}
        />
      </div>
     
        <div >
          <label htmlFor="estado">Estado</label>
          <input className={styles.inputShipping}
            type="text"
            name="Estado"
            id="estado"
            placeholder="Estado"
            value={estado}
            readOnly
          />
        </div>
        <div >
          <label htmlFor="municipio">Municipio</label>
          <input className={styles.inputShipping}
            type="text"
            name="Municipio"
            id="municipio"
            placeholder="Municipio"
            value={municipio}
            readOnly
          />
        </div>
     
       <div >
        <label htmlFor="colonia">Colonia</label>
        <select  className={styles.inputSelect}
          name="ListaColonias"
          id="colonias"
          value={coloniaSeleccionada}
          onChange={(e) => setColoniaSeleccionada(e.target.value)}
        >
          <option value="">Seleccionar</option>
          {colonias.map((colonia, colonia_id) => (
            <option key={colonia_id} value={colonia}>
              {colonia}
            </option>
          ))}
        </select>
       </div>
     
        <div >
          <label htmlFor="calle">Calle</label>
          <input className={styles.inputShipping}
            type="text"
            name="Calle"
            id="calle"
            placeholder="Calle"
            value={calle}
            onChange={(e) => setCalle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="numero_exterior">Número exterior</label>
          <input className={styles.inputShipping}
            type="text"
            name="NumeroExterior"
            id="numero_exterior"
            placeholder="Número exterior"
            value={numeroExterior}
            onChange={(e) => setNumeroExterior(e.target.value)}
          />
        </div>
      
        <div >
        <label htmlFor="textReferencia">Referencia</label>
        <input className={styles.inputShipping_ref}
          name="textReferencia"
          id="textReferencia"
          value={referencia}
          onChange={(e) => setReferencia(e.target.value)}
        />
        </div>
        </div>
        <div className={styles.actionsData}>
        <button className={styles.btnC} onClick={handleShippingMethod}>Cancelar</button>
        <button className={styles.saveData} type="submit">
          Guardar datos envío
        </button>
        
       </div>
    </form>
  );
}
