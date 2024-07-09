

import '../Estilos/Servicios.css';

export default function Servicios(){
    return(
        <div className="box_servicios">
            <div className="box_servicioInformacion">
                <FontAwesomeIcon className='icon_servicio' icon={faTruck} />
                <p className='informacion_servicios'>ENVÍOS A TODA LA <br /> REPÚBLICA MEXICANA</p>
            </div>
            <div className="box_servicioInformacion">
                <FontAwesomeIcon className='icon_servicio' icon={faPhone} />
                <p className='informacion_servicios'>SERVICIO AL CLIENTE</p>
            </div>
            <div className="box_servicioInformacion">
                <FontAwesomeIcon className='icon_servicio' icon={faCreditCard} />
                <p className='informacion_servicios'>PAGOS SEGUROS</p>
            </div>
        </div> 
    );
}