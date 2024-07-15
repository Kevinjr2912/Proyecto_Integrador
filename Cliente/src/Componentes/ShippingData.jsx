import { useState } from "react";
import Swal from 'sweetalert2';
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
    try{
        const response = await fetch(`http://localhost:3000/api/codigo_postal?cp=${codigoPostal}`);
        const data = await response.json();

        setEstado(data.codigo_postal.estado);
        setMunicipio(data.codigo_postal.municipio);
        setColonias(data.codigo_postal.colonias);
    }catch(err){
        console.log('Error al enviar la petición al servidor');
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(document.getElementById('calle').value == "" || document.getElementById('textReferencia').value == ""){
        Swal.fire({
            icon: "errorr",
            title: "Oops...",
            text: `No pueden quedar campos vacíos`,
        });
    } 
    console.log("Valor para calle" + calle);
    console.log("Valor para numero exterior " +  numeroExterior);
    console.log("Valor para referencia " + referencia)
  }

  return (
    <form className="containerShippingData" onSubmit={handleSubmit}>
      <label htmlFor="codigo_postal">Código postal</label>
      <input
        type="text"
        name="CodigoPostal"
        placeholder="Código postal"
        id="codigo_postal"
        onBlur={blurCP}
        onChange={(e) => setCodigoPostal(e.target.value)}
      />
      <div className="referencias">
        <div className="box_estado">
          <label htmlFor="estado">Estado</label>
          <input 
          type="text" 
          name="Estado" 
          id="estado" 
          placeholder="Estado" 
          value={estado} 
          readOnly/>
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
      <label htmlFor="colonia">Colonia</label>
      <select name="" id="">{
        colonias.map((colonia,colonia_id) => (
            <option key={colonia_id} value={colonia}>{colonia}</option>
        ))
      }</select>
      
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
      <label htmlFor="textReferencia">Referencia</label>
      <textarea
        name="textReferencia"
        id="textReferencia"
        maxLength="330"
        value={referencia}
        onChange={(e) => setReferencia(e.target.value)}
      ></textarea>

      <div className="actionsData">
        <button className="btn_cancelar">Cancelar</button>
        <button className="saveData" type="submit">Guardar datos envío</button>
      </div>
    </form>
  );
}
