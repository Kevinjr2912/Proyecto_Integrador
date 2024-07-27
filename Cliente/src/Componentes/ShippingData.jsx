import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import "../Estilos/ShippingData.css";

export default function ShippingData() {
  const [codigoPostal, setCodigoPostal] = useState("");
  const [estado, setEstado] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [colonias, setColonias] = useState([]);
  const [coloniaSeleccionada, setColoniaSeleccionada] = useState("");
  const [calle, setCalle] = useState("");
  const [numeroExterior, setNumeroExterior] = useState("");
  const [referencia, setReferencia] = useState("");

  const blurCP = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/codigo_postal?cp=${codigoPostal}`
      );
      const data = await response.json();

      setEstado(data.codigo_postal.estado);
      setMunicipio(data.codigo_postal.municipio);
      setColonias(data.codigo_postal.colonias);
    } catch (err) {
      console.log("Error al enviar la petición al servidor");
    }
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (document.getElementById("calle").value == "" || document.getElementById("textReferencia").value == "") {
      Swal.fire({
        icon: "errorr",
        title: "Oops...",
        text: `No pueden quedar campos vacíos`,
      });
    } else{
      if(!document.getElementById('colonias').value){
        Swal.fire({
          icon: "errorr",
          title: "Oops...",
          text: `Debes seleccionar una colonia, no haz seleccionado una`,
        });
      }

      if (document.getElementById("numero_exterior").value != "" && isNaN(document.getElementById("numero_exterior").value) == true) {
        Swal.fire({
          icon: "errorr",
          title: "Oops...",
          text: `El valor para el campo de número exterior debe ser númerico`,
        });
      } else{

        const data = {
          'codigo_postal' : codigoPostal,
          'nombre_estado' : estado,
          'nombre_municipio' : municipio,
          'nombre_colonia' : coloniaSeleccionada,
          'calle' : calle,
          'numeroExterior' : numeroExterior,
          'referencia' : referencia
        }

        try{
          const response = await fetch('http://localhost:3000/shippingData/addShippingInformation/11',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data),
          });

          if(response.ok){
            Swal.fire({
              icon: "success",
              title: 'Datos de envío establecidos correctamente',
              showConfirmButton: false,
              timer: 1500,
            });
          }
          
        }catch(err){
          console.log("Error al enviar la solicitud al servidor");
        }

        
      }
    }

    
  };

  return (
    <form className="containerShippingData" onSubmit={handleSubmit}>
      <div className="cp">
        <label htmlFor="codigo_postal" >Código postal</label>
        <input
          type="text"
          name="CodigoPostal"
          placeholder="Código postal"
          id="codigo_postal"
          onBlur={blurCP}
          onChange={(e) => setCodigoPostal(e.target.value)}
        />
      </div>
      <div className="referencias">
        <div className="box_estado">
          <label htmlFor="estado">Estado</label>
          <input
            type="text"
            name="Estado"
            id="estado"
            placeholder="Estado"
            value={estado}
            readOnly
          />
        </div>
        <div className="box_municipio">
          <label htmlFor="municipio">Municipio</label>
          <input
            type="text"
            name="Municipio"
            id="municipio"
            placeholder="Municipio"
            value={municipio}
            readOnly
          />
        </div>
      </div>
      <div className="cols">
        <label htmlFor="colonia">Colonia</label>
        <select name="ListaColonias" id="colonias" value={coloniaSeleccionada} onChange={(e) => setColoniaSeleccionada(e.target.value)}>
          <option value="">Seleccionar</option>
          {colonias.map((colonia, colonia_id) => (
            <option key={colonia_id} value={colonia}>
              {colonia}
            </option>
          ))}
        </select>
      </div>
      <div className="referencia_cercana">
        <div className="box_calle">
          <label htmlFor="calle">Calle</label>
          <input
            type="text"
            name="Calle"
            id="calle"
            placeholder="Calle"
            value={calle}
            onChange={(e) => setCalle(e.target.value)}
          />
        </div>
        <div className="box_numeroExterior">
          <label htmlFor="numero_exterior">Número exterior</label>
          <input
            type="text"
            name="NumeroExterior"
            id="numero_exterior"
            placeholder="Número exterior"
            value={numeroExterior}
            onChange={(e) => setNumeroExterior(e.target.value)}
          />
        </div>
      </div>
      <div className="ref">
        <label htmlFor="textReferencia">Referencia</label>
        <input
          name="textReferencia"
          id="textReferencia"
          value={referencia}
          onChange={(e) => setReferencia(e.target.value)}
        ></input>
      </div>
      <div className="actionsData">
        <button className="btn_c">Cancelar</button>
        <button className="saveData" type="submit">
          Guardar datos envío
        </button>
      </div>
    </form>
  );
}
