import '../Estilos/ShippingData.css';

export default function ShippingData(){
    return(
        <form className="containerShippingData">
            <label htmlFor='codigo_postal'>Código postal</label>
            <input type="text" name="CodigoPostal" placeholder='Código postal' id='codigo_postal' />
            <div className="referencias" >
                <div className="box_estado">
                    <label htmlFor="estado" >Estado</label>
                    <input type="text" name="Estado" id="estado" placeholder='Estado' />
                </div>
                <div className="box_municipio">
                    <label htmlFor="municipio" >Municipio</label>
                    <input type="text" name="Municipio" id="municipio" placeholder='Municipio' />
                </div>
            </div>
            <label htmlFor="colonia">Colonia</label>
            <input type="text" name="Colonoia" id='colonia' placeholder='Colonia' />
            <div className="referencia_cercana" >
                <div className="box_calle">
                    <label htmlFor="calle" >Calle</label>
                    <input type="text" name="Calle" id="calle" placeholder='Calle' />
                </div>
                <div className="box_numeroExterior">
                    <label htmlFor="numero_exterior" >Número exterior</label>
                    <input type="text" name="NumeroExterior" id="numero_exterior" placeholder='Número exterior' />
                </div>
            </div>
            <label htmlFor="textReferencia">Referencia</label>
            <textarea name="textReferencia" id="textReferencia" maxLength="330"></textarea>

            <div className="actionsData">
                <button className='btn_cancelar'>Cancelar</button>
                <button className='saveData'>Guardar datos envío</button>
            </div>
        </form>
    );
}